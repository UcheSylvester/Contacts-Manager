import React from "react";
import "./App.css";
import ListContacts from "./ListContacts";

import { Route } from "react-router-dom";

import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContacts from "./CreateContacts";

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
        <Route
          exact
          path="/"
          render={(props) => (
            <ListContacts
              contacts={contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />

        <Route path="/create" component={CreateContacts} />
      </div>
    );
  }
}

export default App;
