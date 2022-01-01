import React, { useState, useRef, useEffect } from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Checkbox, Avatar, Dropdown, Tooltip } from "neetoui";

import Alert from "components/Common/Alert";

const ContactRow = ({ contact, deleteContact }) => {
  const rowRef = useRef();
  const [overflow, setOverflow] = useState(false);
  useEffect(() => {
    const isOverflown = element => {
      setOverflow(element.current.offsetWidth < element.current.scrollWidth);
    };
    isOverflown(rowRef);
  }, []);

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
          <Tooltip
            content={<span>{contact.email}</span>}
            placement="bottom-start"
            className={`${overflow ? "block" : "hidden"}`}
          >
            <Typography
              ref={rowRef}
              style="body2"
              className={`truncate overflow-hidden`}
            >
              {contact.email}
            </Typography>
          </Tooltip>
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
