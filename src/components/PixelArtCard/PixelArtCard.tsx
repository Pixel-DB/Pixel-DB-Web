import "./PixelArtCard.css";

interface Props {
  name: string;
  description: string;
  id: string;
}

const PixelArtCard = ({ name, description, id }: Props) => {
  const handleClick = () => {
    console.log("ID" + id);
  };

  return (
    <div
      className="rounded-lg shadow m-2 max-w-[300px] max-h-[450px]"
      onClick={handleClick}
    >
      <div className="bg-white w-[250px] h-[250px] rounded-lg flex justify-center items-center object-cover">
        <img
          className="p-3"
          src={`http://localhost:3000/pixelart/${id}/picture`}
          alt="PixelArt"
        />
      </div>
      <div className="px-2 pb-2">
        <h1 className="text-black text-lg">{name}</h1>
        <p className="text-gray-700 text-sm">{description}</p>
        <p className="text-gray-700 text-xs">{id}</p>
      </div>
    </div>
  );
};

export default PixelArtCard;
