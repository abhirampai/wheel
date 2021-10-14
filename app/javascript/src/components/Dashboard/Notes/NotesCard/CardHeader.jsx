import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Typography } from "neetoui/v2";

const CardHeader = ({ title, setShowModal }) => {
  return (
    <div className="flex justify-between w-full px-4 pt-4">
      <Typography style="h3">{title}</Typography>
      <Dropdown
        icon={() => <MenuVertical size={20} color="gray" />}
        position="bottom-start"
        buttonStyle="text"
      >
        <li>Edit</li>
        <li onClick={() => setShowModal(true)}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default CardHeader;
