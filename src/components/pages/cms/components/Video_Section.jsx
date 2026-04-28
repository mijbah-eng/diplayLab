import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h2_text mb-10 text-center">Essential Features to <br /> Power Your Digital Signage</h2>
          <div className="relative max-w-5xl mx-auto mt-20">
            <HeroVideoDialog
              className="w-full"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/JUkE1ymCPp4?si=ujvBM53IZL5tONGU"
              thumbnailSrc="/images/video/hero.png"
              thumbnailAlt="Hero Video"
            />
            {/* <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/JUkE1ymCPp4?si=ujvBM53IZL5tONGU"
              thumbnailSrc="/images/video/hero.png"
              thumbnailAlt="Hero Video"
            /> */}
          </div>
        </div>
      </section>
  );
}
