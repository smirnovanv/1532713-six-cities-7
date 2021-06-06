import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const {apartments} = props;
  return (
    <Main apartments={apartments}/>
  );
}

App.propTypes = {
  apartments: PropTypes.array.isRequired,
};

export default App;
