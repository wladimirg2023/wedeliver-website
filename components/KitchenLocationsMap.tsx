"use client";

import {useEffect, useRef} from "react";

const kitchens = [
  {name:"T Tower",address:"5640 P. Burgos Street, Makati City",coordinates:[14.5643698,121.0308223] as [number,number]},
  {name:"M Center",address:"1002 Shaw Boulevard, Pasig City",coordinates:[14.5754877,121.0602905] as [number,number]},
];

export function KitchenLocationsMap(){
  const mapElement=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(!mapElement.current)return;
    let map:import("leaflet").Map|undefined;
    void import("leaflet").then(L=>{
      if(!mapElement.current)return;
      map=L.map(mapElement.current,{scrollWheelZoom:false,zoomControl:true});
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
      const bounds=L.latLngBounds([]);
      kitchens.forEach(kitchen=>{
        const icon=L.divIcon({className:"kitchen-pin-wrap",html:'<span class="kitchen-pin" aria-hidden="true"></span>',iconSize:[32,42],iconAnchor:[16,42],popupAnchor:[0,-38]});
        L.marker(kitchen.coordinates,{icon}).addTo(map!).bindPopup(`<strong>${kitchen.name}</strong><br>${kitchen.address}`);
        bounds.extend(kitchen.coordinates);
      });
      map.fitBounds(bounds,{padding:[55,55],maxZoom:14});
    });
    return()=>{map?.remove()};
  },[]);
  return <div ref={mapElement} className="kitchen-map" role="region" aria-label="Map showing T Tower and M Center kitchen locations"/>;
}
