import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactIntialStateType, ContactType } from "../utils/type";

const initialState: contactIntialStateType = {
  contacts: [],
  selectedContact: null,
};

const todoSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<ContactType>) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action: PayloadAction<string>) {
      const id = action.payload;
      const filteredContacts = state.contacts.filter((ele) => ele.id !== id);
      state.contacts = filteredContacts;
    },
    setSeletecd(state, action: PayloadAction<ContactType | null>) {
      state.selectedContact = action.payload;
    },
    editContact(state,action:PayloadAction<ContactType>){
      const {id} = action.payload
      const idx = state.contacts.findIndex(ele => ele.id === id);
      console.log('id')
      state.contacts[idx] = action.payload;
    }
  },
});

export const { addContact, deleteContact, setSeletecd,editContact } = todoSlice.actions;
export default todoSlice.reducer;
