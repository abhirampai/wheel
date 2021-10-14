import React, { useState } from "react";

import Alert from "components/Common/Alert";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const NotesCard = ({ note, deleteNote }) => {
  const imageUrl = "https://i.pravatar.cc/300";
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mt-5 border neeto-ui-border-gray-300 neeto-ui-shadow-s">
        <CardHeader title={note.title} setShowModal={setShowModal} />
        <CardBody description={note.description} />
        <CardFooter tags={note.tags} imageUrl={imageUrl} />
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
