import {useContext} from 'react'
import { ModalContext } from "../context/modal.context";
import { ModalType } from "../utils/type";

const useModal = () => useContext(ModalContext) as ModalType

export default useModal;