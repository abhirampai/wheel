import React from "react";

import ContactHeader from "./ContactHeader";
import ContactRow from "./ContactRow";

const ContactTable = ({ contacts, deleteContact }) => {
  return (
    <table
      className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
    >
      <ContactHeader />
      <tbody>
        {contacts.map((contact, index) => (
          <ContactRow
            key={index}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
