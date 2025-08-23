import Button from "@/components/ui/Button/Button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUsContainer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const section = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".FadeUp", { opacity: 0, y: 100 });
      gsap.to(".FadeUp", {
        stagger: 0.2,
        scrollTrigger: ".FadeUp",
        duration: 0.4,
        opacity: 1,
        delay: 0.1,
        y: 0,
      });
    },
    { scope: section }
  );

  return (
    <section
      id="about"
      className="w-full px-6 py-20 flex items-center justify-center"
      ref={section}
    >
      <div className="max-w-[750px] w-full text-center space-y-10">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-black">About Us</h1>
          <div className="h-1 w-28 mx-auto rounded-full bg-amber-500" />
        </div>

        <div className="space-y-5 text-lg">
          <p className="text-gray-700 FadeUp">
            Hi, I’m Lukas. I’ve always loved the style of Minecraft—its
            simplicity, creativity, and that nostalgic retro feeling. I noticed
            there are many art platforms, but no focused home just for pixel
            artists.
          </p>
          <p className="text-gray-600 FadeUp">
            <span className="font-bold text-amber-600">PixelDB</span> is about
            celebrating creativity, connecting people, and giving pixel art the
            spotlight it deserves.
          </p>
        </div>

        <div className="max-w-[500px] mx-auto FadeUp">
          <div className="flex justify-center space-x-5 items-center">
            <Button wFull color="blue">
              Explore
            </Button>
            <Button wFull color="green">
              Contribute
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContainer;
