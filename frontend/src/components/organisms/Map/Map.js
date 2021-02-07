import React from 'react';
import { useSelector } from "react-redux";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { SetView, location, zoom } from './SetView';
import styles from './Map.module.scss';

const flatlyIcon = new L.Icon ({
  iconUrl: './assets/favicon.svg',
  iconSize: [38, 55]
});

const Map = () => {

  const flats = useSelector(state => state.filteredFlats && !state.all ? state.filteredFlats : state.flats);
  const activeCountry = useSelector(state => state.activeCountry);

  return(
    <div className={styles.wrapper}>
    <MapContainer center={[52.577, 17.106]} className={styles.map} scrollWheelZoom={false} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetView center={location[activeCountry]} zoom={zoom[activeCountry]}/>
      {flats.map(flat => (
        <Marker icon={flatlyIcon} key={flat.id} position={flat.coordinates} >
          <Tooltip>
            {flat.price}
          </Tooltip>
          <Popup>{flat.propertyType}</Popup>
        </Marker>
      ))}
      <Marker icon={flatlyIcon} position={[51.505, -0.09]}/>
    </MapContainer>
  </div>
  )
};

export default Map;