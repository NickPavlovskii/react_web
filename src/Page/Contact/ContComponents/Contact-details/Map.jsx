
// Без API :(
import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Maps = () => {
    const defaultState = {
        center: [59.884493, 30.315914],
        zoom: 12,
      };
  return (
   
        
        <div className="map">
        <YMaps >
      <Map defaultState={defaultState}   width='100%'
  height='400px'>
        <Placemark geometry={[59.884493, 30.315914]} />
      </Map>
    </YMaps>
        </div>
  
  );
};
 
export default Maps;