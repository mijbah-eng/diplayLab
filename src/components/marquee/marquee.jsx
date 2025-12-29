import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <>
      <Marquee gradient={true}>
        <div className="flex gap-10 text-3xl font-bold items-center justify-center overflow-y-hidden">
            *
          <span>Educations</span>
          *
          <span>Real Estate & Corporation Office</span>
          *
          <span>Government</span>
          *
          <span>Religious Venues </span>
          *
          <span className="mr-10">Healthcare</span>
        </div>
      </Marquee>
    </>
  );
}

export default MarqueeSection;
