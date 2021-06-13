import PropTypes from 'prop-types';

export default PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.oneOf(['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']).isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavourite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['apartment', 'room', 'house', 'hotel']).isRequired,
}).isRequired;

