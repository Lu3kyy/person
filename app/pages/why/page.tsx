import WhySection from '../../components/WhySection';

export default function WhyPage() {
  const reasons = [
    'Innovative research',
    'Mentorship',
    'Community impact'
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <WhySection reasons={reasons} />
    </div>
  );
}