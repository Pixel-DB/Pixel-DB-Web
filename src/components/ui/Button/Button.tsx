import "./Button.css";

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <a
      href="#"
      className="bg-green-500 px-4 py-2 rounded-lg border-slate-800 border-2 font-bold text-slate-800 button-3d w-full max-w-[300px] text-center"
    >
      {children}
    </a>
  );
}

export default Button;
