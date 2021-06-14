import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import OfferProp from '../offer/offer.prop';


function OffersList(props) {
  const { apartments, getActiveCardId, goViaLink} = props;
  const apartmentsList = apartments.map((apartment) => <Card key={apartment.id} title={apartment.title} price={apartment.price} type={apartment.type} preview={apartment.previewImage} id={apartment.id} getActiveCardId={getActiveCardId} goViaLink={goViaLink} />);

  return (
    <div className="cities__places-list places__list tabs__content">
      {apartmentsList}
    </div>
  );
}

OffersList.propTypes = {
  apartments: PropTypes.arrayOf(
    PropTypes.oneOfType([OfferProp]).isRequired,
  ),
  getActiveCardId: PropTypes.func.isRequired,
  goViaLink: PropTypes.func.isRequired,
};

export default OffersList;
