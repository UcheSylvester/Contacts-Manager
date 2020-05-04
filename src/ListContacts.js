import React from "react";

const ListContacts = ({ contacts }) => (
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

export default ListContacts;
