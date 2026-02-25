type ProfileCardProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileCard({ name, bio, image }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="mx-auto w-37.5 rounded-lg"
      />
      <h2 className="mt-4 text-2xl font-semibold">{name}</h2>
      <p className="mt-1 text-base">{bio}</p>
    </div>
  );
}
