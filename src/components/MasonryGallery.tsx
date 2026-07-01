import './MasonryGallery.css'
import picFiles from 'virtual:pics'

function getImageAlt(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .trim()
}

function getImageSrc(fileName: string) {
  return `${import.meta.env.BASE_URL}pics/${encodeURIComponent(fileName)}`
}

function MasonryGallery() {
  if (picFiles.length === 0) {
    return null
  }

  return (
    <section className="masonry-gallery" aria-labelledby="masonry-gallery-heading">
      <h2 id="masonry-gallery-heading">The Gallery</h2>
      <div className="masonry-gallery__grid">
        {picFiles.map((fileName) => (
          <figure className="masonry-gallery__item" key={fileName}>
            <img alt={getImageAlt(fileName)} loading="lazy" src={getImageSrc(fileName)} />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default MasonryGallery
