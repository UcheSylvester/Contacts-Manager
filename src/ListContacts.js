import React, { useState } from "react";

import PropTypes from "prop-types";

const ListContacts = ({ contacts, onDeleteContact }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (event) => {
    const { value } = event.target;

    setQuery(value.trim());
  };

  const filteredContacts =
    query === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          placeholder="search contacts"
          type="search"
          value={query}
          onChange={updateQuery}
        />
      </div>

      <ol className="contact-list">
        {filteredContacts.map((contact) => {
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
    </div>
  );
};

ListContacts.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;
