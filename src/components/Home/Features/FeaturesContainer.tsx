import FeaturesBox from "./FeaturesBox";

const FeaturesContainer = () => {
  return (
    <section
      id="features"
      className="flex justify-center bg-background-secondary"
    >
      <div className="max-w-[1100px] w-full mx-auto m-5 place-items-center flex flex-col gap-15 p-5">
        <div>
          <h1 className="text-4xl font-bold text-center">
            What can PixelDB do?
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full justify-center justify-items-center items-center gap-5">
          <FeaturesBox
            color="amber-500"
            title="Upload & Share"
            subtitle="Upload your pixel art and instantly share it with the community"
          />
          <FeaturesBox
            color="blue-500"
            title="Profiles"
            subtitle="Create your profile, showcase your work, and grow your audience."
          />
          <FeaturesBox
            color="green-500"
            title="Powerful API"
            subtitle="Upload, fetch, and organize pixel arts with a simple REST API."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesContainer;
