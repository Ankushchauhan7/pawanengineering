import Link from "next/link";

interface Stat { label: string; value: string; }

interface Props {
  breadcrumb: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  description: string;
  stats: Stat[];
  gradientClass?: string; // tailwind gradient classes
  eyebrowColor?: string;
}

export default function OTHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  stats,
  gradientClass = "from-blue-700 via-blue-600 to-cyan-500",
  eyebrowColor = "text-blue-200",
}: Props) {
  return (
    <section className={`bg-gradient-to-br ${gradientClass} text-white py-12 px-4`}>
      <div className="max-w-7xl mx-auto md:px-16">

        {/* Breadcrumb */}
        <nav className="text-white/60 text-xs mb-4 flex items-center gap-1.5 flex-wrap">
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${eyebrowColor}`}>
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
          {title}
        </h1>
        <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        <div className="flex gap-6 mt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold">{s.value}</div>
              <div className="text-white/60 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}