import {useState} from 'react'
import Chart from "../components/Chart";
import Map from "../components/Map";
const Analysis = () => {
  const [toggle,setToggle] = useState(true);
  return (
    <div>
      <div className="flex align-center mb-5 justify-end">
        <button
          className="bg-gray-900 px-3 py-2 text-white rounded-md cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? 'Show Map' : 'Show Graph'}
        </button>
      </div>
      {toggle ? <Chart /> : <Map />}
    </div>
  );
};

export default Analysis;
