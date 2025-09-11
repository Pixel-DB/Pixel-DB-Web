import dayjs from "dayjs";

interface Props {
  children: React.ReactNode;
}

const DashboardAdminDate = ({ children }: Props) => {
  const date = dayjs(children as string).format("HH:mm DD.MM.YYYY");
  return <span>{date}</span>;
};

export default DashboardAdminDate;
