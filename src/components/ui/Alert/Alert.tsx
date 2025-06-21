import { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface Props {
  children: React.ReactNode;
}

const Alert = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="fixed w-full bottom-15 flex justify-center">
        <div className="max-w-[500px] border-4 border-accent px-2 py-2 rounded-xl bg-background text-center flex items-center justify-center shadow-lg">
          <FaInfo className="text-xl text-accent" />
          <span className="text-base">{children}</span>
          <div
            className="pl-4 pr-2 cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <IoMdClose />
          </div>
        </div>
      </div>
    )
  );
};

export default Alert;
