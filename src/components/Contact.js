import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {online: this.props.online}
  }
  render () {
    return (
      <div className="Contact" >
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <span className="name">{this.props.name}</span>
          <div 
            className="status"
            onClick= {event => {
              const newStatus = !this.state.online;
              console.log(newStatus);
              console.log(this.state)
              console.log(this.props.online);
              this.setState({online: newStatus});
            }}
          >
            <span className={this.state.online ? "status-online" : "status-offline"} />
            <p className="status-text">{this.state.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  } 
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;