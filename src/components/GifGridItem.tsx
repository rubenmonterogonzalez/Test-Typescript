import React from 'react'

const GifGridItem = ({url, title}: {url: string, title: string}) => {
  return (
    <>
      <figure className="grid-item">
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </>
  );
}

export default GifGridItem