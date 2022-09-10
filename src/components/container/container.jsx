import { useState, useEffect } from 'react';
import { photosApi } from '../../__dont_modify__/api/photos';
import { Picture } from '../picture/picture';
import './container.css';

export const Container = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await photosApi
        .getPhotos({ page: 4 })
        .then(({ photos }) => setPhotos(photos))
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
    };
    fetchData();
  }, [photos]);

  return (
    <div className="container">
      {photos.length > 0 ? (
        photos.map((p, i) => <Picture key={i} src={p.previewUrl} />)
      ) : (
        <h2 className="message">{error.length > 0 ? `Error: ${error}` : 'No photos'}</h2>
      )}
    </div>
  );
};
