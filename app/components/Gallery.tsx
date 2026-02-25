type GalleryProps = {
  images: string[];
};

// my simple gallery component that takes an array of image URLs and displays them in a row with some styling
export default function Gallery({ images }: GalleryProps) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {images.map((img: string, idx: number) => (
        <img key={idx} src={img} alt={`Gallery ${idx}`} style={{ width: '350px', borderRadius: '8px' }} />
      ))}
    </div>
  );
}
