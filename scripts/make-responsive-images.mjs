// Generates smaller JPG copies of each photo/social image so the site can send phones a smaller
// file via srcset, instead of always sending the full-size original. Run with: node scripts/make-responsive-images.mjs
import { Jimp } from 'jimp'
import { readdirSync, mkdirSync, existsSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const WIDTHS = [480, 800] // generated sizes; the original file remains the largest ("full")
const SOURCE_DIRS = ['public/assets/photos', 'public/assets/social']

for (const dir of SOURCE_DIRS) {
  const outDir = join(dir, 'w')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  for (const file of readdirSync(dir)) {
    if (!/\.jpe?g$/i.test(file)) continue
    const srcPath = join(dir, file)
    const name = basename(file, extname(file))
    for (const width of WIDTHS) {
      const outPath = join(outDir, `${name}-${width}w.jpg`)
      const image = await Jimp.read(srcPath)
      if (image.bitmap.width <= width) continue // never upscale
      image.resize({ w: width })
      await image.write(outPath, { quality: 78 })
      console.log(`${outPath}`)
    }
  }
}
