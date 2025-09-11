import useData from "@/hooks/useData";
import StatsBox from "./StatsBox";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StatsContainer = () => {
  const { data } = useData();
  const section = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.set(".Box", { opacity: 0, y: 100 });
      gsap.to(".Box", {
        stagger: 0.1,
        scrollTrigger: ".Box",
        duration: 0.3,
        opacity: 1,
        y: 0,
      });
    },
    { scope: section }
  );

  return (
    <section
      id="stats"
      ref={section}
      className="bg-background-secondary flex w-full flex-col p-5 gap-5"
    >
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold">
          Our Journey in Numbers
        </h1>
        <h2 className="text-gray-500 text-base">
          Tracking users, requests, and creative milestones
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1200px] w-full mx-auto m-5 gap-5 justify-items-center">
        <div className="Box">
          <StatsBox name="Users" color="accent" count={data?.TotalUsers} />
        </div>
        <div className="Box">
          <StatsBox
            name="Total Requests"
            color="amber-500"
            count={data?.TotalRequests}
          />
        </div>
        <div className="Box">
          <StatsBox
            name="Pixel arts"
            color="blue-500"
            count={data?.TotalPixelArts}
          />
        </div>
        <div className="Box">
          <StatsBox
            name="Github Stars"
            color="green-500"
            count={data?.TotalGithubStars}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsContainer;
