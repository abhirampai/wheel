import React, { useState } from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Tag, Avatar, Tooltip, Dropdown } from "neetoui/v2";

import Alert from "components/Common/Alert";

const NotesCard = ({ note, deleteNote }) => {
  const imageUrl = "https://i.pravatar.cc/300";
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="border mt-5 neeto-ui-border-gray-300 neeto-ui-shadow-s">
        <div className="pt-4 px-4 flex w-full justify-between">
          <h3>{note.title}</h3>
          <Dropdown
            icon={() => <MenuVertical size={20} color={"gray"} />}
            position="bottom-start"
            buttonStyle="text"
          >
            <li>Edit</li>
            <li onClick={() => setShowModal(true)}>Delete</li>
          </Dropdown>
        </div>
        <div className="text-gray pt-2 px-4">
          <p className="text-sm pr-1">{note.description}</p>
        </div>
        <div className="w-full px-4 pt-2">
          <div className="border-b neeto-ui-gray-200 w-full"></div>
        </div>
        <div className="w-full px-4 flex pt-4 mb-4 justify-between">
          <div className="flex gap-x-2">
            {note.tags.map((tag, idx) => (
              <Tag
                key={idx}
                className="bg-gray-100 text-gray-500"
                label={tag.label}
              />
            ))}
          </div>
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
      <Alert
        modalName={"Note"}
        showModal={showModal}
        setShowModal={setShowModal}
        deleteFunc={deleteNote}
        id={note.id}
      />
    </>
  );
};

export default NotesCard;
