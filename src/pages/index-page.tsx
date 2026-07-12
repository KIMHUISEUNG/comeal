import { HeroCarouselRow } from "@/components/home/hero-carousel-row";

export default function IndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <HeroCarouselRow />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 xl:px-12">
        <div>Shortcut services</div>
        <div>Issue keyword strip</div>
        <div>Section / Recently viewed products</div>
        <div>Section / Shopping live</div>
        <div>Section / Recommended Products</div>
      </div>
    </div>
  );
}
