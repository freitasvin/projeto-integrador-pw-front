import { toast } from 'react-toastify';

export const notifyError = (msg) => {
  toast.error(
    msg,
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    },
  );
};

export const notifySuccess = (msg) => {
  toast.success(
    msg,
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    },
  );
};
