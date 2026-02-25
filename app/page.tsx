import ProfileCard from "./components/ProfileCard";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between gap-12 bg-white px-16 py-32 text-center dark:bg-black">
        <h1 className="text-5xl font-bold">Greta Thunberg  Influential Climate/Social Activist</h1>
        <h2 className="text-2xl font-light">Greta Thunberg is a Swedish environmental activist known worldwide for pushing governments to take climate change seriously. She became famous in 2018 after starting a solo school strike outside the Swedish parliament, which grew into the global Fridays for Future movement, inspiring millions of young people to join the fight against unjust policies and practices laced within governments and corporations.
        </h2>
        <h2 className="text-2xl font-light">its not just climate change, she also advocates for social justice, economic reform, and a more sustainable future. Greta has been recognized with numerous awards and honors for her activism, including being named Time magazine's Person of the Year in 2019. Her unwavering dedication to put pressure on world leaders to take meaningful action on their harsh living conditions and the climate crisis has made her one of the most influential voices in the fight for a better future for our planet and its inhabitants.</h2>
        <ProfileCard name="Greta Thunberg" bio="A leader in climate activism." image="/Greta_Thunberg_urges_MEPs_to_show_climate_leadership_(49618310531)_(cropped).jpg" />
      
      </main>
    </div>
  );
}
