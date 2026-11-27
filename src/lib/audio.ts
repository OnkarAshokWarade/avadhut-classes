// Small sound helpers for the Student Zone, made with the Web Audio API (no audio files needed).
// Browsers only allow sound after the visitor clicks something, so call `unlockAudio()` inside a click handler.

let ctx: AudioContext | null = null

function getContext() {
  if (!ctx) {
    const AudioCtor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (AudioCtor) ctx = new AudioCtor()
  }
  if (ctx?.state === 'suspended') void ctx.resume()
  return ctx
}

export const unlockAudio = () => {
  getContext()
}

/** Plays one note: frequency (Hz), start delay and length (seconds). */
function tone(freq: number, start: number, length: number, type: OscillatorType = 'sine', volume = 0.25) {
  const c = getContext()
  if (!c) return
  const osc = c.createOscillator()
  const gain = c.createGain()
  const t = c.currentTime + start
  osc.type = type
  osc.frequency.value = freq
  gain.gain.setValueAtTime(0, t)
  gain.gain.linearRampToValueAtTime(volume, t + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + length)
  osc.connect(gain).connect(c.destination)
  osc.start(t)
  osc.stop(t + length + 0.05)
}

export type AlertKind = 'melody' | 'bell' | 'buzz' | 'chime' | 'digital'

export const playAlert: Record<AlertKind, () => void> = {
  melody: () => [523.3, 659.3, 784, 1046.5, 784, 1046.5].forEach((f, i) => tone(f, i * 0.18, 0.5, 'triangle', 0.25)),
  bell: () => {
    tone(880, 0, 1.6, 'sine', 0.3)
    tone(1320, 0, 1.2, 'sine', 0.12)
    tone(880, 0.9, 1.6, 'sine', 0.25)
  },
  buzz: () => {
    for (let i = 0; i < 4; i++) tone(440, i * 0.32, 0.22, 'square', 0.12)
  },
  chime: () => [1046.5, 1318.5, 1568].forEach((f, i) => tone(f, i * 0.12, 1.1, 'sine', 0.2)),
  digital: () => {
    for (let i = 0; i < 6; i++) tone(i % 2 ? 1480 : 1180, i * 0.14, 0.12, 'square', 0.14)
  },
}

/** Short "ding" for a correct quiz answer. */
export const playCorrect = () => tone(880, 0, 0.25, 'triangle', 0.15)

export type AmbientKind = 'off' | 'rain' | 'calm' | 'ocean' | 'whitenoise'

// Builds a short loop of noise (random static), optionally shaped by a "brownian" smoothing
// step so it sounds softer (rain) than flat white noise.
function noiseBuffer(c: AudioContext, smoothing: number) {
  const length = c.sampleRate * 2
  const buffer = c.createBuffer(1, length, c.sampleRate)
  const data = buffer.getChannelData(0)
  let last = 0
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1
    last = smoothing ? (last + smoothing * white) / (1 + smoothing) : white
    data[i] = last * 3.5
  }
  return buffer
}

/** Starts a looping background sound and returns a function that fades it out and stops it. */
export function startAmbient(kind: AmbientKind): () => void {
  const c = getContext()
  if (!c || kind === 'off') return () => {}

  const master = c.createGain()
  master.gain.value = 0
  master.connect(c.destination)
  master.gain.linearRampToValueAtTime(kind === 'rain' || kind === 'ocean' ? 0.35 : kind === 'whitenoise' ? 0.2 : 0.12, c.currentTime + 2)
  const sources: AudioScheduledSourceNode[] = []

  if (kind === 'rain' || kind === 'whitenoise') {
    // Rain: soft "brown" noise through a low-pass filter. White noise: the same loop, unfiltered.
    const src = c.createBufferSource()
    src.buffer = noiseBuffer(c, kind === 'rain' ? 0.02 : 0)
    src.loop = true
    if (kind === 'rain') {
      const lowpass = c.createBiquadFilter()
      lowpass.type = 'lowpass'
      lowpass.frequency.value = 900
      src.connect(lowpass).connect(master)
    } else {
      src.connect(master)
    }
    src.start()
    sources.push(src)
  } else if (kind === 'ocean') {
    // Filtered noise whose volume rises and falls slowly, like waves reaching the shore.
    const src = c.createBufferSource()
    src.buffer = noiseBuffer(c, 0.06)
    src.loop = true
    const lowpass = c.createBiquadFilter()
    lowpass.type = 'lowpass'
    lowpass.frequency.value = 500
    const waveGain = c.createGain()
    waveGain.gain.value = 0.6
    const lfo = c.createOscillator()
    const lfoGain = c.createGain()
    lfo.frequency.value = 0.12
    lfoGain.gain.value = 0.4
    lfo.connect(lfoGain).connect(waveGain.gain)
    src.connect(lowpass).connect(waveGain).connect(master)
    src.start()
    lfo.start()
    sources.push(src, lfo)
  } else {
    // "Calm tones": four gentle tones whose volume slowly swells and fades.
    ;[220, 277.2, 329.6, 440].forEach((f, i) => {
      const osc = c.createOscillator()
      const gain = c.createGain()
      const lfo = c.createOscillator()
      const lfoGain = c.createGain()
      osc.frequency.value = f
      gain.gain.value = 0.25
      lfo.frequency.value = 0.07 + i * 0.03
      lfoGain.gain.value = 0.25
      lfo.connect(lfoGain).connect(gain.gain)
      osc.connect(gain).connect(master)
      osc.start()
      lfo.start()
      sources.push(osc, lfo)
    })
  }

  return () => {
    const now = c.currentTime
    master.gain.cancelScheduledValues(now)
    master.gain.setValueAtTime(master.gain.value, now)
    master.gain.linearRampToValueAtTime(0, now + 0.6)
    sources.forEach((s) => s.stop(now + 0.7))
  }
}
