import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
}

function getCardArtwork(eyebrow?: string) {
  switch (eyebrow) {
    case "experiments":
      return "bg-[radial-gradient(circle_at_28%_40%,rgb(200_165_99_/_0.55),transparent_13%),radial-gradient(circle_at_58%_50%,rgb(17_40_58_/_0.92),transparent_34%),linear-gradient(135deg,rgb(16_34_48),rgb(10_19_29)_62%,rgb(32_63_82))]";
    case "components":
      return "bg-[radial-gradient(circle_at_50%_50%,rgb(255_255_255_/_0.15),transparent_8%),repeating-radial-gradient(circle_at_50%_50%,rgb(192_166_116_/_0.22)_0_0.7rem,transparent_0.7rem_1.4rem),linear-gradient(180deg,rgb(17_17_17),rgb(38_38_36))]";
    default:
      return "bg-[linear-gradient(180deg,rgb(30_53_69),rgb(14_21_31)),radial-gradient(circle_at_50%_50%,rgb(255_255_255_/_0.16),transparent_18%)]";
  }
}

export function Card({ title, description, href, eyebrow }: CardProps) {
  return (
    <Link
      href={href}
      className="group block h-full bg-transparent transition hover:-translate-y-1"
    >
      <div className={`aspect-[4/5] overflow-hidden ${getCardArtwork(eyebrow)}`}>
        <div className="h-full w-full bg-[linear-gradient(180deg,rgb(255_255_255_/_0.03),rgb(0_0_0_/_0.2))] transition duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="relative -mt-10 ml-5 mr-5 bg-[rgb(var(--surface))] px-5 py-5 sm:ml-7 sm:mr-7">
        {eyebrow ? (
          <p className="editorial-kicker text-[rgb(var(--accent))]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-[rgb(var(--foreground))] transition group-hover:text-[rgb(var(--accent))]">
          {title}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-8 text-[rgb(var(--muted))]">
          {description}
        </p>
        <p className="mt-7 text-[0.68rem] uppercase tracking-[0.3em] text-[rgb(var(--foreground)_/_0.74)]">
          View Entry
        </p>
      </div>
    </Link>
  );
}
