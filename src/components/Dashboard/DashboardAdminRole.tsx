interface Props {
  children: React.ReactNode;
}

export const DashboardAdminRole = ({ children }: Props) => {
  if (children === "admin") {
    return (
      <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-sm border-1">
        {children}
      </span>
    );
  }

  if (children === "user") {
    return (
      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-sm border-1">
        {children}
      </span>
    );
  }

  if (children === "moderator") {
    return (
      <span className="text-sm text-sky-600 bg-sky-100 px-2 py-1 rounded-sm border-1">
        {children}
      </span>
    );
  }
};
