interface NavItem {
  name: string;
  link: string;
}

interface Props {
  item: NavItem[];
}

export const NavbarItems = ({ item }: Props) => {
  return (
    <div className="p-2 flex items-center justify-center text-xl font-medium flex-1 space-x-12">
      {item.map((item) => (
        <a key={item.name} href={item.link}>
          {item.name}
        </a>
      ))}
    </div>
  );
};
