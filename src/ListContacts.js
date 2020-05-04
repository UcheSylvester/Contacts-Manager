import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    // console.log({ props: this.props });
    const { contacts } = this.props;
    return (
      <ol className="contact-list">
        {contacts.map(({ name, avatarURL, handle }) => (
          <li key={name} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${avatarURL})`,
              }}
            ></div>

            <div className="contact-name">
              <p>{name}</p>
              <p>{handle}</p>
            </div>

            <button className="contact-remove">Remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
