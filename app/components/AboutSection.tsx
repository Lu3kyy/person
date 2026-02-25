type AboutSectionProps = {
  details: string;
};

// lets me be able to easily add an about section to my profile page with some text about me
export default function AboutSection({ details }: AboutSectionProps) {
  return (
    <section>
      <h3>About</h3>
      <p>{details}</p>
    </section>
  );
}
