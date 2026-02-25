type AboutSectionProps = {
  details: string;
};

export default function AboutSection({ details }: AboutSectionProps) {
  return (
    <section>
      <h3>About</h3>
      <p>{details}</p>
    </section>
  );
}
