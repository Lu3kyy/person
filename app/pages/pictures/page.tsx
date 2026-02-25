import Gallery from '../../components/Gallery';

export default function PicturesPage() {
  const images = [
    '/190923112717-greta-thunberg-unga-climate-change.jpg',
    '/Swedish-climate-activist-Greta-Thunberg-marches-climate-strike-April-2024.jpg',
    '/4684.jpg',
    '/greta.jpg',
    '/skynews-greta-thunberg-environment_5950849.jpg',
    '/_105909740_gettyimages-1132962530.jpg'
  ];

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <Gallery images={images} />
    </div>
  );
}