import React from "react";
import "./App.css";
import ListContacts from "./ListContacts";

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

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
