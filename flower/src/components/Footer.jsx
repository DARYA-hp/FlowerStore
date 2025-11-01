import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import {  FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiFullscreenLine } from "react-icons/ri";
import { IoIosMan } from "react-icons/io";

const redMarker = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [35, 45],
  iconAnchor: [17, 45],
});

const handleFullscreen = () => {
  const mapContainer = document.getElementById("my-map");
  if (!document.fullscreenElement) {
    mapContainer.requestFullscreen().catch((err) => {
      console.error("ERROR", err);
    });
  } else {
    document.exitFullscreen();
  }
};

function Footer() {
  return (
    <>
      <div className="flex flex-row justify-between pt-32 px-32">
        <div>
          <ul className="flex flex-col gap-2 text-[18px]">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[25px] font-[550]">Contact</p>
          <p className="text-[16px] leading-6">
            Pokhara, Nepal <br />
            mail@gardenpokhara.club <br />
            +977-9801048130
          </p>
        </div>

        <div className="relative w-[458px] h-[265px] rounded-lg overflow-hidden shadow-md border z-0" id="my-map">
          <MapContainer center={[49.67, 11.05]} zoom={10}
            scrollWheelZoom={true} zoomControl={false} className="h-full w-full" >

            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://opentopomap.org/">OpenTopoMap</a>'/>

            <Marker position={[49.67, 11.05]} icon={redMarker}>
              <Popup>Example Location</Popup>
            </Marker>

            <ZoomControl position="bottomright" />
          </MapContainer>

          <IoIosMan className="absolute rounded-sm w-[32px] h-[40px] bg-white bottom-[120px] right-[10px] text-[#E49400] z-[1000]" />

          <div className="absolute text-center top-[10px] left-[10px] bg-white px-4 py-1 rounded shadow z-[1000]">
            <p className="font-[600] text-gray-700">Map</p>
          </div>

          <div onClick={handleFullscreen}
            className="absolute top-[10px] right-[10px] z-[1000] bg-white rounded shadow p-2 cursor-pointer">
            <RiFullscreenLine className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="pt-24 pb-10 flex flex-row justify-between px-32 items-center">
        <p>Copyright © 2021 GardenPokhara</p>

        <div className="flex gap-4">
          <FaFacebookF className="text-[#4C7AEF] w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <FaYoutube className="text-[#DF2424] w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <AiFillInstagram className="text-[#818181] w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <p>Created by Brandbuilder</p>
      </div>
    </>
  )}

export default Footer;
