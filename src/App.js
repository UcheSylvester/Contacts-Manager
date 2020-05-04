import React from "react";
import "./App.css";
import ListContacts from "./ListContacts";

import * as ContactsAPI from "./utils/ContactsAPI";

class App extends React.Component {
  state = {
    contacts: [
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "@tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "@karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "@richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg",
      },
    ],
  };

  componentDidMount() {
    const getAllContacts = async () => {
      try {
        const contacts = await ContactsAPI.getAll();

        console.log({ contacts });

        if (contacts)
          this.setState(() => ({
            contacts,
          }));
      } catch (error) {
        console.log({ error });
      }
    };

    getAllContacts();
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id),
    }));

    ContactsAPI.remove(contact);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <ListContacts
          contacts={contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
