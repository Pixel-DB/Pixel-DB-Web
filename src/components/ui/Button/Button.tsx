import "./Button.css";

interface Props {
  children: React.ReactNode;
  sm?: boolean;
  color?: "blue" | "green" | "red" | "amber" | "accent" | "secondary";
  href?: string;
  wFull?: boolean;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({
  children,
  sm = false,
  color = "blue",
  href,
  wFull = false,
  type = "button",
  onClick,
  disabled = false,
}: Props) {
  const bgColorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    amber: "bg-amber-500",
    accent: "bg-accent",
    secondary: "bg-secondary",
  };

  const classes = `${bgColorClasses[color]} 
  ${
    sm ? "px-3 py-1" : "px-4 py-1"
  } rounded-lg border-slate-800 border-2 font-bold text-slate-800 button-3d 
  ${sm ? "max-w-[100px] w-full" : wFull ? "w-full" : "px-4"} text-center ${
    disabled ? "opacity-70 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
