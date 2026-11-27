// Lazy-loaded image with intrinsic size to avoid layout shift.
export function Picture({
  src,
  alt,
  width,
  height,
  className = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className={`h-auto w-full ${className}`} />
}
