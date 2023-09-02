import {FC} from 'react'
import { IoIosContact } from "react-icons/io";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { ContactType } from "../utils/type";
import { useAppDispatch } from '../hooks/reduxhook';
import { deleteContact, setSeletecd } from '../redux/contactSlice';
import useModal from '../hooks/useModal';

type Props = {
  data:ContactType
}

const ContactCard:FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const {updateShow} = useModal();
  const {id,fname,lname,mob,status} = props.data;

  const handleDelete = () => dispatch(deleteContact(id))

  const handleEdit = () => {
    dispatch(setSeletecd(props.data));
    updateShow(true);
  }
  return (
    <div className="flex w-[250px] drop-shadow rounded-sm bg-white p-3">
      <div className="flex flex-col items-center gap-1">
        <IoIosContact size={60} />
        <div className="flex items-center gap-1">
          <GrStatusCriticalSmall color={status === "1" ? "green" : "red" } size="10" />
          <span className="text-xs">{status === "1" ? 'Active' : "Inactive"}</span>
        </div>
      </div>
      <div className="flex flex-col pl-3 gap-2">
        <span className="block text-sm">{fname + " " + lname}</span>
        <span className="block text-sm">{mob}</span>
        <div className="flex align-center gap-2">
          <button className="bg-gray-900 px-3 py-1 text-white rounded-sm text-[0.8rem]" onClick={handleEdit}>
            Edit
          </button>
          <button className="bg-gray-900 px-3 py-1 text-white rounded-sm text-[0.8rem]" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
