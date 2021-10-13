import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Tag, Avatar, Tooltip, Dropdown } from "neetoui/v2";

const NotesCard = ({ note }) => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <div className="border mt-5 neeto-ui-border-gray-300 h-max neeto-ui-shadow-s">
      <div className="pt-4 px-4 flex w-full justify-between">
        <h3>{note.title}</h3>
        <Dropdown
          icon={() => <MenuVertical size={20} color={"gray"} />}
          position="bottom-start"
          buttonStyle="text"
        >
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      </div>
      <div className="text-gray pt-2 px-4">
        <p className="text-sm pr-1">{note.content}</p>
      </div>
      <div className="w-full px-4 pt-2">
        <div className="border-b neeto-ui-gray-200 w-full"></div>
      </div>
      <div className="w-full px-4 flex pt-4 mb-4 justify-between">
        <Tag className="bg-gray-100 text-gray-500" label="Getting Started" />
        <div className="gap-x-2 flex">
          <Clock className="my-auto" size={10} />
          <Tooltip
            content={<span>Wednesday, 10:30AM</span>}
            placement="bottom-start"
          >
            <span className="my-auto text-sm">Created 2 hours ago</span>
          </Tooltip>
          <Avatar user={{ name: "Test User", imageUrl }} size="medium" />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
