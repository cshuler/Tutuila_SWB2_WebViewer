import React, { useRef, useEffect, useState } from 'react';
import './Map.css';
import data from '../data/geoJson_files/runoff_prj_cleaned.json';

const MapBoxMap = () => {
  return (
    <div>
      <div ref={mapContainerRef} className='map-container' />
        <p>temp</p>
      
    </div>
  );
};

export default MapBoxMap;
