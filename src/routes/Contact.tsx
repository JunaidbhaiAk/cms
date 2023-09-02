import {useContext} from 'react'
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";
import { ModalContext } from '../context/modal.context';
import { ModalType } from '../utils/type';
import { useAppSelector } from '../hooks/reduxhook';

const Contact = () => {
  const {show,updateShow} = useContext(ModalContext) as ModalType
  const contacts = useAppSelector(state => state.contacts);
  return (
    <div>
      <div className="flex align-center mb-5 justify-end">
        <button className="bg-gray-900 px-3 py-2 text-white rounded-md" onClick={() => updateShow(true)}>
            Add Contact
        </button>
      </div>
      <div>
        <div className="flex align-center flex-wrap gap-6 justify-center">
          {contacts.map(ele => <ContactCard data={ele} key={ele.id}/>)}
        </div>
      </div>
      {show && <Modal />}
    </div>
  );
};

export default Contact;
