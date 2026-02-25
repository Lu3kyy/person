import ProfileCard from '../../components/ProfileCard';
import AboutSection from '../../components/AboutSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 dark:bg-black">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-8 text-center">
        <ProfileCard
          name="Greta Thunberg"
          bio="A leader in climate activism."
          image="/202243-Greta-main-portrait-NO-COLOUR-CORRECTION-797x1062.jpg"
        />
        <AboutSection details="Greta Thunberg is known for her groundbreaking work in climate activism and environmental advocacy. She has inspired millions around the world to take action against climate change. Her dedication and courage continue to motivate people to fight for a sustainable future." />

        <h1>Greta Thunbergs activism began in a surprisingly small and personal way. As a young teenager in Sweden, she learned about climate change in school and was shocked by how little adults seemed to be doing about it. The more she read, the more she felt a deep sense of urgency. Greta has often explained that she couldn't understand why governments and leaders were acting as if the crisis didn't exist. This frustration pushed her to take action, even if she had to start alone.</h1>

        <h1>In August 2018, at just fifteen years old, Greta made a bold decision: she skipped school and sat outside the Swedish parliament with a handmade sign that read “School Strike for Climate.” She wasn't trying to become famous or start a global movement — she simply wanted her government to take stronger action to reduce carbon emissions. Her quiet, determined protest caught the attention of passersby, then local media, and eventually the world. What began as a one-person strike quickly grew into the international Fridays for Future movement, inspiring millions of students to join her in demanding climate action.</h1>

       <h1>Greta became influential not because she had power or resources, but because of her honesty and courage. She spoke directly, without sugarcoating the reality of climate change, and people listened. Her speeches at events like the United Nations Climate Action Summit showed a young person unafraid to challenge world leaders. She reminded them — and the world — that climate change is not a distant problem but a present emergency. Her ability to turn scientific facts into a moral call to action made her one of the most powerful voices of her generation.</h1>

       <h1>Beyond her activism, Greta has also been recognized for her influence on culture and politics. She has received numerous awards, including being named Time magazine's Person of the Year in 2019. Her impact extends beyond just climate activism; she has become a symbol of youth empowerment and the fight for a better future. Greta's story shows how one person's passion and determination can spark a global movement and inspire change on a massive scale.</h1>

      </div>
    </main>
  );
}