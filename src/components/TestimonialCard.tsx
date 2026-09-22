import { Reveal } from "@/components/Reveal";

export function TestimonialCard({
  quote,
  author,
  delay = 0,
}: {
  quote: string;
  author?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="border border-hairline bg-surface p-8">
      <p className="text-base italic leading-relaxed text-ink/90">&ldquo;{quote}&rdquo;</p>
      {author && <p className="eyebrow mt-5">{author}</p>}
    </Reveal>
  );
}
