import "./DetailImage.css";

interface Props {
  url: string;
}

const DetailImage = ({ url }: Props) => {
  return <img src={url} className="hover:shadow-2xl/20 rounded-md" />;
};

export default DetailImage;
