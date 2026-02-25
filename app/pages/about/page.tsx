import ProfileCard from '../../components/ProfileCard';
import AboutSection from '../../components/AboutSection';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ProfileCard name="Jane Doe" bio="A leader in science." image="/profile.jpg" />
      <AboutSection details="Jane Doe is known for her groundbreaking research and leadership." />
    </div>
  );
}