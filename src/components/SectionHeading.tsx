import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-ink-muted">{intro}</p>}
    </Reveal>
  );
}
