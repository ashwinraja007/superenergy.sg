import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, Building, Globe, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Counts = {
  litres: number;
  businesses: number;
  carbon: number;
  vehicles: number;
};

const Stats = () => {
  const [counts, setCounts] = useState<Counts>({
    litres: 0,
    businesses: 0,
    carbon: 0,
    vehicles: 0,
  });

  // Trigger animation only when section enters the viewport
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const targets = {
            litres: 175000,
            businesses: 3500,
            carbon: 2200,
            vehicles: 100,
          };

          const steps = 60;
          const duration = 2000;
          const increment = Object.fromEntries(
            Object.entries(targets).map(([k, v]) => [k, (v as number) / steps])
          ) as Record<keyof Counts, number>;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCounts((prev) => {
              const updated = { ...prev };
              (Object.keys(prev) as (keyof Counts)[]).forEach((key) => {
                const value = Math.min(
                  Math.floor(increment[key] * step),
                  targets[key]
                );
                updated[key] = value;
              });
              return updated;
            });
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = [
    {
      icon: Recycle,
      value: counts.litres.toLocaleString(),
      suffix: "+",
      label: "Litres Collected",
      color: "text-emerald-600",
      ring: "from-emerald-400/30 to-emerald-600/20",
    },
    {
      icon: Building,
      value: counts.businesses.toLocaleString(),
      suffix: "+",
      label: "Businesses Served",
      color: "text-green-700",
      ring: "from-green-400/30 to-green-600/20",
    },
    {
      icon: Globe,
      value: counts.carbon.toLocaleString(),
      suffix: "+",
      label: "Tonnes of Carbon Offset",
      color: "text-sky-700",
      ring: "from-sky-400/30 to-sky-600/20",
    },
    {
      icon: Truck,
      value: counts.vehicles.toLocaleString(),
      suffix: "+",
      label: "Vehicles Powered by Super Energy",
      color: "text-orange-600",
      ring: "from-amber-400/30 to-orange-600/20",
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      className="relative py-20"
    >
      {/* Subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-50/70 to-transparent" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            Metrics that matter
          </Badge>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers, real change. See how we’re turning responsible collection into
            measurable impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-200/60 via-transparent to-emerald-300/60"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Card className="h-full rounded-[1rem] p-6 sm:p-8 text-center bg-white/85 backdrop-blur border border-emerald-100 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                {/* Icon with glowing ring */}
                <div className="relative mx-auto mb-5 w-16 h-16">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.ring} blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative w-full h-full rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
                  </div>
                </div>

                {/* Value */}
                <div
                  aria-live="polite"
                  className="text-4xl font-extrabold mb-1 flex justify-center items-baseline tracking-tight"
                >
                  <span className={`${stat.color}`}>{stat.value}</span>
                  <span className="text-2xl ml-1 text-foreground/80">{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>

                {/* Accent underline on hover */}
                <div className="mx-auto mt-4 h-0.5 w-10 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          *Figures are cumulative and refreshed periodically.
        </p>
      </div>

      {/* tiny keyframes if not present globally */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Stats;
