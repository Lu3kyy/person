type GalleryProps = {
  images: string[];
};

// my simple gallery component that takes an array of image URLs and displays them in a row with some styling
export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="mx-auto grid w-full max-w-screen-3xl grid-cols-3 gap-3">
      {images.map((img: string, idx: number) => (
        <img
          key={idx}
          src={img}
          alt={`Gallery ${idx + 1}`}
          className="h-100 w-full rounded-lg object-cover"
        />
      ))}
    </div>
  );
}
