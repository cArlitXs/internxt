import { useState, useEffect } from 'react';
import { photosApi } from '../../__dont_modify__/api/photos';
import { Picture } from '../picture/picture';
import './container.css';

export const Container = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await photosApi
        .getPhotos({ page: 4 })
        .then(({ photos }) => setPhotos(photos))
        .catch((err) => console.error(err));
    };
    fetchData();
  }, [photos]);

  return (
    <div className="container">
      {photos.length > 0 ? photos.map((p, i) => <Picture key={i} src={p.previewUrl} />) : <p>No photos</p>}
    </div>
  );
};
