import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    // console.log({ props: this.props });
    const { contacts } = this.props;
    return (
      <ol className="contact-list">
        {contacts.map(({ name, avatarURL }) => (
          <li key={name} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${avatarURL})`,
              }}
            ></div>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
