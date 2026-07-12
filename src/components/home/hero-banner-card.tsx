import { memo } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export type HeroBannerTheme = "basil" | "tomato" | "sea" | "grain";

export type HeroBanner = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  backgroundImageUrl?: string;
  countryCode: string;
  theme: HeroBannerTheme;
  sortOrder: number;
};

const themeClassNames: Record<
  HeroBannerTheme,
  {
    root: string;
    badge: string;
    cta: string;
  }
> = {
  basil: {
    root: "bg-[#0F6B4B]",
    badge: "bg-white/15 text-white",
    cta: "text-[#DDF7E8]",
  },
  tomato: {
    root: "bg-[#B9472B]",
    badge: "bg-white/15 text-white",
    cta: "text-[#FFE2D8]",
  },
  sea: {
    root: "bg-[#155E75]",
    badge: "bg-white/15 text-white",
    cta: "text-[#D7F2FF]",
  },
  grain: {
    root: "bg-[#705523]",
    badge: "bg-white/15 text-white",
    cta: "text-[#FFF0C2]",
  },
};

type HeroBannerCardProps = {
  banner: HeroBanner;
};

export const HeroBannerCard = memo(function HeroBannerCard({
  banner,
}: HeroBannerCardProps) {
  const theme = themeClassNames[banner.theme];

  return (
    <Link to={banner.href} className="group block h-full">
      <article
        className={cn(
          "relative h-[184px] overflow-hidden rounded-2xl p-6 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:h-52",
          theme.root,
        )}
      >
        {banner.backgroundImageUrl && (
          <>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={banner.backgroundImageUrl}
              alt=""
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/35" />
          </>
        )}

        <div className="relative z-10 flex h-full max-w-[68%] flex-col justify-between">
          <div className="space-y-3">
            <span
              className={cn(
                "inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold",
                theme.badge,
              )}
            >
              {banner.eyebrow}
            </span>
            <div className="space-y-1.5">
              <h2 className="text-xl leading-tight font-bold tracking-normal sm:text-2xl">
                {banner.title}
              </h2>
              <p className="line-clamp-2 text-sm leading-5 text-white/82">
                {banner.description}
              </p>
            </div>
          </div>
          <span className={cn("text-sm font-semibold", theme.cta)}>
            {banner.ctaLabel}
          </span>
        </div>

        <div
          className="absolute right-3 bottom-0 h-[136px] w-[136px] sm:right-5 sm:h-40 sm:w-40"
          aria-hidden="true"
        />
      </article>
    </Link>
  );
});
