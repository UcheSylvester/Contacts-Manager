import React from "react";
import "./App.css";
import ListContacts from "./ListContacts";

import * as ContactsAPI from "./utils/ContactsAPI";

class App extends React.Component {
  state = {
    contacts: [],
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

  removeContact = async (contact) => {
    try {
      const response = await ContactsAPI.remove(contact);

      console.log({ response });

      this.setState((currentState) => ({
        contacts: currentState.contacts.filter((c) => c.id !== contact.id),
      }));
    } catch (error) {
      console.log({ error });
    }
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
