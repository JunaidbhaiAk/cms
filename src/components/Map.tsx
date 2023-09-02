import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useMapData from "../hooks/useMapData";
import { mapDataType } from "../utils/type";
// import 'leaflet/dist/leaflet.css';
const Map = () => {
  const { data } = useMapData();
  return (
    <>
      <MapContainer center={[20,77]} zoom={4} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data?.map((ele:mapDataType) => {
          return (
            <Marker position={[ele.lat,ele.long]}>
              <Popup>
                <span className="block text-sm font-bold">Country: <span className="font-normal">{ele.countryName}</span></span>
                <span className="block text-sm font-bold">Cases: <span className="font-normal">{ele.cases}</span></span>
                <span className="block text-sm font-bold">Deaths: <span className="font-normal">{ele.deaths}</span></span>
                <span className="block text-sm font-bold">Recovered: <span className="font-normal">{ele.recovered}</span></span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
