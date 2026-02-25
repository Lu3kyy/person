type ProfileCardProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileCard({ name, bio, image }: ProfileCardProps) {
  return (
    <div>
      <img src={image} alt={name} style={{ width: '150px', borderRadius: '8px' }} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}
