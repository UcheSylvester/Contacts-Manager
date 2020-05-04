import React from "react";

import PropTypes from "prop-types";

const ListContacts = ({ contacts, onDeleteContact }) => (
  <ol className="contact-list">
    {contacts.map((contact) => {
      const { id, name, avatarURL, handle } = contact;

      return (
        <li key={id} className="contact-list-item">
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

          <button
            className="contact-remove"
            onClick={() => onDeleteContact(contact)}
          >
            Remove
          </button>
        </li>
      );
    })}
  </ol>
);

ListContacts.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;
