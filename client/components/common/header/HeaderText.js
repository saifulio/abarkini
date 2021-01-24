import React from 'react';
import PropTypes from 'prop-types';

const HeaderText = (props) => {
  const { innerText } = props;
  return <section className="header_text">{innerText}</section>;
};

HeaderText.propTypes = {
  innerText: PropTypes.any,
};

export default HeaderText;

/*
We stand for top quality templates. Our genuine developers always optimized bootstrap
      commercial templates.
      <br />
      Don't miss to use our cheap abd best bootstrap templates.
*/
