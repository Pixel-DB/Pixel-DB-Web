import { Bounce, toast, type ToastOptions } from "react-toastify";

const defaultToastOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

export const SuccessToast = (message: string) => {
  toast.success(message, {
    ...defaultToastOptions,
  });
};

export const ErrorToast = (message: string) => {
  toast.error(message, {
    ...defaultToastOptions,
  });
};
