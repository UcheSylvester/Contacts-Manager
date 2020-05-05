import React from "react";

import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContacts extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const { onCreateContact } = this.props;

    const values = serializeForm(event.target, { hash: true });

    console.log({ values });

    onCreateContact && onCreateContact(values);
  };

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact">
          Close
        </Link>

        <form className="create-contact-form" onSubmit={this.handleSubmit}>
          <ImageInput
            className="create-contact-avatar-input"
            maxHeight={64}
            name="avatarURL"
          />

          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />

            <button>Add Contacts</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContacts;
