import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import OfferProp from '../offer/offer.prop';
import useMap from './useMap';
import leaflet from 'leaflet';

const city = {
  title: 'Amsterdam',
  lat: 52.38333,
  lng: 4.9,
  zoom: 12,
};

const URL_MARKER_DEFAULT = 'img/pin.svg';

function Map(props) {
  const { apartments } = props;
  console.log(apartments[0]);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [20, 30],
    iconAnchor: [10, 30],
  });

  useEffect(() => {
    if (map) {
      apartments.forEach((apartment) => {
        leaflet
          .marker({
            lat: apartment.location.latitude,
            lng: apartment.location.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, apartments]);

  return (
    <div id="map" ref={mapRef} style={{ height: '100%' }}></div>
  );
}

Map.propTypes = {
  apartments: PropTypes.arrayOf(
    PropTypes.oneOfType([OfferProp]).isRequired,
  ),
};

export default Map;
