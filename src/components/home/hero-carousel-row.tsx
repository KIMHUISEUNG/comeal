import { useEffect, useMemo, useState } from "react";
import { PauseIcon, PlayIcon } from "lucide-react";
import italySummerBanner from "@/assets/Desktop/banner/italian-summer-kit-caprese.png";
import mexicoTacoBanner from "@/assets/Desktop/banner/watch-party-table.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HeroBannerCard, type HeroBanner } from "./hero-banner-card";

const heroBanners: HeroBanner[] = [
  {
    id: "italy-summer-kit",
    eyebrow: "ITALY",
    title: "이탈리아 여름 보양식",
    description: "토마토, 허브, 올리브 오일을 한 번에 담은 여름 레시피 키트",
    ctaLabel: "레시피 키트 보기",
    href: "/events/italy-summer-kit",
    backgroundImageUrl: italySummerBanner,
    countryCode: "IT",
    theme: "tomato",
    sortOrder: 1,
  },
  {
    id: "thai-green-curry",
    eyebrow: "THAILAND",
    title: "태국 그린커리 세트",
    description: "코코넛 밀크부터 향신 채소까지 필요한 재료를 추천해요",
    ctaLabel: "태국 식재료 보기",
    href: "/events/thai-green-curry",
    countryCode: "TH",
    theme: "basil",
    sortOrder: 2,
  },
  {
    id: "mexico-taco-night",
    eyebrow: "MEXICO",
    title: "타코 나이트 준비 끝",
    description: "또띠아, 살사, 향신료를 비교 없이 한 번에 골라보세요",
    ctaLabel: "멕시코 키트 보기",
    href: "/events/mexico-taco-night",
    backgroundImageUrl: mexicoTacoBanner,
    countryCode: "MX",
    theme: "grain",
    sortOrder: 3,
  },
  {
    id: "norway-seafood-table",
    eyebrow: "NORWAY",
    title: "북유럽 해산물 식탁",
    description: "연어와 감자, 딜 소스까지 담은 간편한 나라별 장보기",
    ctaLabel: "수산 키트 보기",
    href: "/events/norway-seafood-table",
    countryCode: "NO",
    theme: "sea",
    sortOrder: 4,
  },
];

const carouselTrackOffset =
  "translateX(clamp(-356px, calc((100vw - 1992px) / 2), -24px))";

export function HeroCarouselRow() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sortedBanners = useMemo(
    () => [...heroBanners].sort((a, b) => a.sortOrder - b.sortOrder),
    [],
  );
  const renderedBanners = useMemo(
    () => [...sortedBanners, ...sortedBanners],
    [sortedBanners],
  );

  useEffect(() => {
    if (!api) return;

    const updateCarouselState = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateCarouselState();
    api.on("select", updateCarouselState);
    api.on("reInit", updateCarouselState);

    return () => {
      api.off("select", updateCarouselState);
      api.off("reInit", updateCarouselState);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [api, isPaused]);

  const logicalSlideCount = sortedBanners.length;
  const logicalIndex =
    logicalSlideCount > 0 ? selectedIndex % logicalSlideCount : 0;
  const progress =
    logicalSlideCount > 0
      ? ((logicalIndex + 1) / logicalSlideCount) * 100
      : 0;

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      aria-label="추천 국가별 레시피 키트"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-screen"
      >
        <div style={{ transform: carouselTrackOffset }}>
          <CarouselContent viewportClassName="overflow-visible">
            {renderedBanners.map((banner, index) => (
              <CarouselItem
                key={`${banner.id}-${index}`}
                className="basis-[320px] sm:basis-[420px] lg:basis-[486px]"
              >
                <HeroBannerCard banner={banner} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <div className="mx-auto mt-5 flex w-full max-w-7xl items-center gap-8 px-4 md:px-8 xl:px-12">
          <div
            className="bg-muted h-0.5 flex-1 overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <div
              className="bg-foreground h-full rounded-full transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <CarouselPrevious
              aria-label="이전 배너"
              className="static inset-auto my-0 size-8 translate-x-0 rounded-full"
            />
            <CarouselNext
              aria-label="다음 배너"
              className="static inset-auto my-0 size-8 translate-x-0 rounded-full"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="rounded-full"
              aria-label={
                isPaused ? "배너 자동 재생" : "배너 자동 재생 일시정지"
              }
              aria-pressed={isPaused}
              onClick={() => setIsPaused((current) => !current)}
            >
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
