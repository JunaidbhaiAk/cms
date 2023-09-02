export type ModalType = {
  show: boolean;
  updateShow: (val: boolean) => void;
};


export type ContactType = {
  id:string;
  fname:string;
  lname:string;
  mob:string;
  status:string;
}

export type contactIntialStateType = {
  contacts: ContactType[],
  selectedContact: ContactType | null,
}


export type graphDataType = {
  [key:string]:number
}

export type mapDataType = {
  countryName:string,
  lat:number,
  long:number,
  cases:number,
  deaths:number,
  recovered:number
}