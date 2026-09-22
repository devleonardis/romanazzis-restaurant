import Image from "next/image";

export function AwardBadges() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Image
        src="/images/badges/travellers-choice.webp"
        alt="TripAdvisor Traveller's Choice Best of the Best 2025"
        width={64}
        height={64}
        className="h-14 w-14 object-contain"
      />
      <div className="flex flex-col gap-1 text-xs uppercase tracking-widest text-ink-muted">
        <span>Top 25 Fine Dining d&apos;Italia</span>
        <span>Traveller&apos;s Choice — Best of the Best 2025</span>
        <span>1.400+ recensioni TripAdvisor</span>
      </div>
    </div>
  );
}
