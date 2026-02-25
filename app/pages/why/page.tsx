import WhySection from '../../components/WhySection';

export default function WhyPage() {
  const reasons = [
    "She showed that young voices matter. In a world where politics is usually dominated by adults, Greta proved that even a teenager can spark global change. Her school strike started with just one person, but it inspired millions of students to walk out of class and demand climate action. Young people saw that they didn't need to wait until they were older to make a difference—they could speak up now.",
    "She made climate change feel urgent and real. Greta talks about climate change in a way that is honest, emotional, and easy to understand. She doesn't use complicated scientific language. Instead, she explains the crisis in simple terms and connects it to young people's futures. This helped many teens realize that climate change isn't just a science topic—it is something that will shape their lives.",
    "She encouraged youth activism around the world. Her movement, Fridays for Future, spread to more than 150 countries. Students organized marches, created posters, and held peaceful protests in their own cities. Greta's actions gave young people a blueprint: start small, stay consistent, and others will join you. She helped build a global community of young activists who support each other."
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <WhySection reasons={reasons} />
    </div>
  );
}