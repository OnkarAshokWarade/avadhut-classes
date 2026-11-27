// Builds a `srcset` string for a photo/social image so phones can download a smaller file
// instead of the full-size original. Needs a "w" folder of resized copies next to the image
// (made by `node scripts/make-responsive-images.mjs`) and the original image's own width.
export function srcSet(path: string, originalWidth: number): string {
  const slash = path.lastIndexOf('/')
  const dir = path.slice(0, slash)
  const file = path.slice(slash + 1)
  const dot = file.lastIndexOf('.')
  const name = file.slice(0, dot)
  const ext = file.slice(dot)
  const sizes = [480, 800].filter((w) => w < originalWidth)
  const small = sizes.map((w) => `${dir}/w/${name}-${w}w${ext} ${w}w`)
  return [...small, `${path} ${originalWidth}w`].join(', ')
}
