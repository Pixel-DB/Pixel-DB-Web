interface Props {
  children?: React.ReactNode;
  size?: number;
}

const ProfilePicture = ({ children, size = 32 }: Props) => {
  return (
    <img
      className="rounded-md"
      src={`https://ui-avatars.com/api/?background=random&name=${children}&size=${size}&length=1&font-size=0.6`}
    />
  );
};

export default ProfilePicture;
