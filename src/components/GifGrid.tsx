import React from 'react'
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

interface Image {
  id: number,
  title: string,
  url: string,
  images: {
    downsized_medium: {
      url: string
    }
  }
}

const GifGrid = ({ category }: { category: string }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="fadeIn">{category}</h3>

      {loading && <h3>Loading...</h3>}

      <div className="gif-grid fadeIn">
        {images.map((img: Image) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

export default GifGrid