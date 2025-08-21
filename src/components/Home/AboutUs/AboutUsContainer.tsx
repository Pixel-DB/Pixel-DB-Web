import Button from "@/components/ui/Button/Button";

const AboutUsContainer = () => {
  return (
    <section
      id="about"
      className="w-full px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-[750px] w-full text-center space-y-10">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-black">About Us</h1>
          <div className="h-1 w-28 mx-auto rounded-full bg-amber-500" />
        </div>

        <div className="space-y-5 text-lg">
          <p className="text-gray-700">
            Hi, I’m Lukas. I’ve always loved the style of Minecraft—its
            simplicity, creativity, and that nostalgic retro feeling. I noticed
            there are many art platforms, but no focused home just for pixel
            artists.
          </p>
          <p className="text-gray-600">
            <span className="font-bold text-amber-600">PixelDB</span> is about
            celebrating creativity, connecting people, and giving pixel art the
            spotlight it deserves.
          </p>
        </div>

        <div className="max-w-[500px] mx-auto">
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
