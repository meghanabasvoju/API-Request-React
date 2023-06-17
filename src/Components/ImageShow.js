function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
      //{image.created_at}
    </div>
  );
};

export default ImageShow;
