import { createContext, FC, useState, PropsWithChildren } from "react";
import { ModalType } from "../utils/type";


export const ModalContext = createContext<ModalType | null>(null);

const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);
  const updateShow = (val: boolean) => setShow(val);
  return (
    <ModalContext.Provider value={{ show, updateShow }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
