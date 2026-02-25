type WhySectionProps = {
  reasons: string[];
};

export default function WhySection({ reasons }: WhySectionProps) {
  return (
    <section className="mx-auto w-full max-w-4xl text-center">
      <h3 className="text-5xl font-semibold">Why They're Influential to me</h3>
      <ul className="mt-6 space-y-4">
        {reasons.map((reason: string, idx: number) => (
          <li key={idx} className="text-lg leading-relaxed md:text-xl">
            {reason}
          </li>
        ))}
      </ul>
    </section>
  );
}
