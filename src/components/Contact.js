import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Status (props) {
  if (props.isOnline) {
    return <div className="status-offline">.</div>;
  }
  return <div className="status-online">.</div>;
}

function Contact (props) {
  return (
    <div className="Contact">
      <img className="avatar"
        src={props.avatar}
        alt="Avatar"
      />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <Status />
          <p className="status-text">{props.isOnline ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Contact;