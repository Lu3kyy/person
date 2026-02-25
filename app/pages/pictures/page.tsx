import Gallery from '../../components/Gallery';

export default function PicturesPage() {
  const images = [
    '/pic1.jpg',
    '/pic2.jpg',
    '/pic3.jpg'
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Gallery images={images} />
    </div>
  );
}