type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {images.map((img: string, idx: number) => (
        <img key={idx} src={img} alt={`Gallery ${idx}`} style={{ width: '100px', borderRadius: '8px' }} />
      ))}
    </div>
  );
}
