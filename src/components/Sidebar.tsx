import {useState,FC} from 'react'
import {IoPlayOutline,IoClose,IoCellularSharp,IoBook} from 'react-icons/io5'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  const [show,setShow] = useState(false);
  const switchSidebar = () => setShow(!show);
  return (
    <div className="relative bg-blue-600 z-[2]">
      <div className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={switchSidebar}>
        <IoPlayOutline className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
      </div>
      {show && <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              CMS
            </h1>
            <div onClick={switchSidebar}><IoClose className='cursor-pointer'/></div>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <SidebarItem label='Contacts' icon={<IoBook />} path='/'/>
        <SidebarItem label='Analysis' icon={<IoCellularSharp />} path='/analysis' />
        <div className="my-4 bg-gray-600 h-[1px]"></div>
      </div>}
    </div>
  );
};

type Props = {
  label:string,
  icon:JSX.Element,
  path:string
}

const SidebarItem:FC<Props> = ({label,icon,path}) => {
  return (
  <NavLink to={path} className={({isActive}) => `${isActive ? 'bg-gray-600' : 'bg-gray-900'} p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white`}>
    <span>{icon}</span>
    <span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
  </NavLink>
  )
}

export default Sidebar;
