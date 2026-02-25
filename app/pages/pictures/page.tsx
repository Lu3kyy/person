import AboutSection from '@/app/components/AboutSection';
import Gallery from '../../components/Gallery';

export default function PicturesPage() {
  const images = [
    '/greta.jpg',
    '/Swedish-climate-activist-Greta-Thunberg-marches-climate-strike-April-2024.jpg',
    '/4684.jpg'
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Gallery images={images} />
      
    </div>
  );
}