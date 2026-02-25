import ProfileCard from "./components/ProfileCard";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between gap-12 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome to the Influential Person Project</h1>
        <ProfileCard name="Jane Doe" bio="A leader in science." image="/profile.jpg" />
      
      </main>
    </div>
  );
}
