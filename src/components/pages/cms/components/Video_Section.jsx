import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";


export function HeroVideoDialogDemo() {
  return (
    <div className="container">
        <div className="relative md:w-3xl mx-auto mt-20">
            <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/JUkE1ymCPp4?si=ujvBM53IZL5tONGU"
                thumbnailSrc="/images/video/hero.png"
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/JUkE1ymCPp4?si=ujvBM53IZL5tONGU"
                thumbnailSrc="/images/video/hero.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    </div>
   
  )
}
