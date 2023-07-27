import { toast } from 'react-toastify';

export const Toast = (message: string | undefined | null) =>
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });

export const ToastInfo = (message: string | undefined | null) => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};

export const ToastError = (message: string | undefined | null) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};

export const ToastWarning = (message: string | undefined | null) => {
  toast.warning(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};

export const ToastSuccess = (message: string | undefined | null) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};
