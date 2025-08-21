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

export const SuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, {
    ...defaultToastOptions,
    ...options,
  });
};

export const ErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    ...defaultToastOptions,
    ...options,
  });
};

export const InfoToast = (message: string, options?: ToastOptions) => {
  toast.info(message, {
    ...defaultToastOptions,
    ...options,
  });
};

export const WarnToast = (message: string, options?: ToastOptions) => {
  toast.warn(message, {
    ...defaultToastOptions,
    ...options,
  });
};
