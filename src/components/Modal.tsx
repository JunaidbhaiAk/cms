import useModal from "../hooks/useModal";
import ContactForm from "./ContactForm";

const Modal = () => {
  const { updateShow } = useModal();
  return (
    <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal">
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div className="flex justify-between items-center bg-gray-900 text-white text-xl rounded-t-md px-4 py-2">
          <h3>Add Contact</h3>
          <button onClick={() => updateShow(false)}>x</button>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Modal;
