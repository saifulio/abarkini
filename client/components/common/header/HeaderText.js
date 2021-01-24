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
