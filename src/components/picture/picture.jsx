import './picture.css';

export const Picture = ({ src, alt }) => {
  return (
    <div className="pic-container">
      <picture>
        <source srcSet={src} />
        <img src={src} alt={alt} />
      </picture>
    </div>
  );
};
