import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.scss';

export const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      transition={Zoom}
      autoClose={3000}
      hideProgressBar={true}
    />
  );
};
