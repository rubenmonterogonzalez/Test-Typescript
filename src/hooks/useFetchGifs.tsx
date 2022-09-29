import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/GetGifs';

const useFetchGifs = (category: string) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [category]);

  return state;
}

export default useFetchGifs