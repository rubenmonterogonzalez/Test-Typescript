interface Image {
  id: number,
  title: string,
  images: {
    downsized_medium: {
      url: string
    }
  }
}

export const getGifs = async (category: string) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=12&api_key=g5qnBjWFMkeeuOlykA8cHxwl79FDpEYN`
  );

  const { data } = await response.json();
  const gifs = data.map((img: Image) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};