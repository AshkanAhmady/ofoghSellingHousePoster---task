import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import mapLocation from "assets/images/mapLocation.png";
import { getAddressFromLatLng } from "requests/poster/posterRequests";

let center = {
  lat: 35.715298,
  lng: 51.404343,
};
let zoom = 10;

function Draggable({ getLocation }) {
  useMapEvents({
    dragend: (e) => {
      getLocation(e.target);
    },
  });

  return null;
}

export default function MapComponent({ setLocation }) {
  function getLocation(latLng) {
    getAddressFromLatLng(latLng.getCenter()).then((data) => {
      if (data.code === 470) {
        setLocation({
          address: "مسیر انتخاب شده نادرست است",
          latLong: null,
          validLocation: false,
        });
        return;
      }
      setLocation({
        address: data.formatted_address,
        latLong: latLng.getCenter(),
        validLocation: true,
      });
    });
  }

  return (
    <div className="map-root h-[100%] flex flex-col justify-between relative">
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Draggable getLocation={getLocation} />
      </MapContainer>
      <div className="flex justify-center items-center w-[50px] h-[50px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[1000]">
        <img className="mt-[-35px]" alt="mapLocation" src={mapLocation} />
      </div>
    </div>
  );
}
