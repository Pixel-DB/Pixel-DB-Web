import FeaturesBox from "./FeaturesBox";

const FeaturesContainer = () => {
  return (
    <section id="features" className="flex justify-center">
      <div className="grid grid-cols-3  max-w-[1000px] w-full mx-auto m-5 place-items-center">
        <FeaturesBox color="amber-500" title="Title" subtitle="Subtitle" />
      </div>
    </section>
  );
};

export default FeaturesContainer;
