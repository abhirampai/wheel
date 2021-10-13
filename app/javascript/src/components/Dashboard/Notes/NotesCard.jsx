import React, { useState } from "react";

import { MenuVertical, Clock } from "neetoicons";
import {
  Tag,
  Avatar,
  Tooltip,
  Dropdown,
  Modal,
  Typography,
  Button
} from "neetoui/v2";

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
          <p className="text-sm pr-1">{note.content}</p>
        </div>
        <div className="w-full px-4 pt-2">
          <div className="border-b neeto-ui-gray-200 w-full"></div>
        </div>
        <div className="w-full px-4 flex pt-4 mb-4 justify-between">
          <Tag className="bg-gray-100 text-gray-500" label={note.tag} />
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size={"md"}>
        <Modal.Header>
          <Typography style="h2">Delete Note</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Are you sure you want to delete the note? This action cannot be
            undone.
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => {
              deleteNote(note.id);
              setShowModal(false);
            }}
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={() => setShowModal(false)}
            size="large"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotesCard;
