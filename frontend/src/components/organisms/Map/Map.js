import React from 'react';
import styles from './Map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const positionGreatBritain = [51.505, -0.09];
const positionSpain = [40.416, -3.703];

const Map = () => {
  return(
    <div className={styles.wrapper}>
    <MapContainer center={positionSpain} zoom={6} scrollWheelZoom={false} className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
  )
};

export default Map;