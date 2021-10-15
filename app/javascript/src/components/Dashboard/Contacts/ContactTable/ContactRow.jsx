import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Checkbox, Avatar, Dropdown } from "neetoui/v2";

import Alert from "components/Common/Alert";

const ContactRow = ({ contact, deleteContact }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      <tr>
        <td>
          <Checkbox name={contact.id} />
        </td>
        <td>
          <div className="flex gap-x-2">
            <Avatar
              size={"large"}
              user={{ name: `${contact.firstName} ${contact.lastName}` }}
            />
            <div className="flex flex-col mt-1">
              <Typography style="h5" weight="semi-bold">
                {contact.firstName} {contact.lastName}
              </Typography>
              <Typography style="body3" weight="light">
                {contact.role.value}
              </Typography>
            </div>
          </div>
        </td>
        <td>
          <Typography style="body2" weight="light">
            {contact.email}
          </Typography>
        </td>
        <td>
          <Typography style="body2" weight="light">
            {contact.createdAt}
          </Typography>
        </td>
        <td>
          <div className="flex flex-row items-center justify-end space-x-3">
            <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
              <li>Edit</li>
              <li onClick={() => setShowModal(true)}>Delete</li>
            </Dropdown>
          </div>
        </td>
      </tr>
      <Alert
        modalName={"Contact"}
        showModal={showModal}
        setShowModal={setShowModal}
        deleteFunc={deleteContact}
        id={contact.id}
      />
    </React.Fragment>
  );
};

export default ContactRow;
