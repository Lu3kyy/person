type WhySectionProps = {
  reasons: string[];
};

export default function WhySection({ reasons }: WhySectionProps) {
  return (
    <section>
      <h3>Why Influential?</h3>
      <ul>
        {reasons.map((reason: string, idx: number) => (
          <li key={idx}>{reason}</li>
        ))}
      </ul>
    </section>
  );
}
