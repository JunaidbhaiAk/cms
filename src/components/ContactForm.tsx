import { ChangeEvent, useState, useEffect } from "react";
import { ContactType } from "../utils/type";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../hooks/reduxhook";
import { addContact, setSeletecd,editContact } from "../redux/contactSlice";
import useModal from "../hooks/useModal";
const ContactForm = () => {
  const {updateShow} = useModal();
  const [editMode,seteditMode] = useState(false);
  const selected = useAppSelector((state) => state.selectedContact);
  const contacts = useAppSelector((state) => state.contacts)
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selected){
      setContactInfo(selected);
      seteditMode(true);
    } 

    return () => {
      dispatch(setSeletecd(null));
    };
  }, []);
  const [contactInfo, setContactInfo] = useState<ContactType>({
    id: uuidv4(),
    fname: "",
    lname: "",
    mob: "",
    status: "0",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((pre) => ({ ...pre, [name]: value }));
  };
  const handleClick = () => {
    const values = Object.values(contactInfo);
    const len = contactInfo.mob.length < 10;
    if (!values.includes("") && !len) {
      if(!editMode && contacts.some(ele => ele.mob === contactInfo.mob)) alert("Number Alredy Exsist")
      else{
        editMode ? dispatch(editContact(contactInfo)) : dispatch(addContact(contactInfo));
        updateShow(false);
      } 
    } else alert("Please Fill The Details");
  };
  return (
    <div className="p-4">
      <input
        type="text"
        name="fname"
        value={contactInfo.fname}
        className="w-[100%] p-2 border-2 border-gray-900 mb-2"
        placeholder="Enter Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lname"
        value={contactInfo.lname}
        className="w-[100%] p-2 border-2 border-gray-900 mb-2"
        placeholder="Enter Last Name"
        onChange={handleChange}
      />
      <input
        type="text"
        pattern="[1-9]{1}[0-9]{9}"
        name="mob"
        value={contactInfo.mob}
        className="w-[100%] p-2 border-2 border-gray-900 mb-2"
        placeholder="Enter Mobile Number"
        onChange={handleChange}
        maxLength={10}
      />
      <div className="flex align-center gap-4 mb-4">
        Select Status
        <div className="flex items-center">
          <input
            onChange={handleChange}
            checked={contactInfo.status === "1"}
            id="default-radio-1"
            type="radio"
            value="1"
            name="status"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Active
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked={contactInfo.status === "0"}
            id="default-radio-2"
            onChange={handleChange}
            type="radio"
            value="0"
            name="status"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Inactive
          </label>
        </div>
      </div>

      <button
        className="bg-gray-900 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
