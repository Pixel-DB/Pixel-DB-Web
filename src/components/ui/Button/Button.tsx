import "./Button.css";

interface Props {
  children: React.ReactNode;
  sm?: boolean;
  color?: "blue" | "green" | "red" | "amber" | "accent" | "secondary";
  href?: string;
  wFull?: boolean;
  type?: "button" | "submit";
}

function Button({
  children,
  sm = false,
  color = "blue",
  href,
  wFull = false,
  type = "button",
}: Props) {
  const bgColorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    amber: "bg-amber-500",
    accent: "bg-accent",
    secondary: "bg-secondary",
  };

  const classes = `${bgColorClasses[color]} ${
    sm ? "px-2 py-1" : "px-4 py-2"
  } rounded-lg border-slate-800 border-2 font-bold text-slate-800 button-3d w-full ${
    sm ? "max-w-[100px]" : wFull ? "w-full" : "max-w-[300px]"
  } text-center`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export default Button;
