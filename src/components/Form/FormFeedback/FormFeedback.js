import React from 'react';
import PropTypes from 'prop-types';

const Feedback = props => <span className="msg-hidden">{props.message}</span>;

Feedback.propTypes = {
  message: PropTypes.string,
};

export default Feedback;
