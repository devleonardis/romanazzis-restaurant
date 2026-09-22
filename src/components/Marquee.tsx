export function Marquee({ text }: { text: string }) {
  const item = (
    <span className="eyebrow mx-6 whitespace-nowrap text-ink/70">{text}</span>
  );
  return (
    <div className="section-space overflow-hidden border-y border-hairline py-6">
      <div className="marquee-track">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
