import './picture.css';

export const Picture = ({ src, alt }) => {
  return (
    <div className="picContainer">
      <img src={src} alt={alt} />
    </div>
  );
};
