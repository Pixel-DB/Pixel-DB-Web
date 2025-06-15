import "./Button.css";

interface Props {
  children: React.ReactNode;
  sm?: boolean;
  color?: string;
}

function Button({ children, sm = false, color = "blue" }: Props) {
  return (
    <a
      href="#"
      className={`bg-${color}-500 ${
        sm ? "px-2 py-1" : "px-4 py-2"
      }  rounded-lg border-slate-800 border-2 font-bold text-slate-800 button-3d w-full ${
        sm ? "max-w-[100px]" : "max-w-[300px]"
      } text-center`}
    >
      {children}
    </a>
  );
}

export default Button;
