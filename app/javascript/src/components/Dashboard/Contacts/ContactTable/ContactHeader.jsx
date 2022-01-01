import React from "react";

import { Checkbox } from "neetoui";

const ContactHeader = () => {
  return (
    <thead>
      <tr>
        <th>
          <Checkbox name="header" />
        </th>
        <th>Name & Role</th>
        <th>Email</th>
        <th>CreatedAt</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default ContactHeader;
