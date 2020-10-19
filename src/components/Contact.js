import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact" >
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <span className="name">{props.name}</span>
        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;