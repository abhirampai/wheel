import React from "react";

import { Modal, Typography, Button } from "neetoui/v2";

const Alert = ({ modalName, showModal, setShowModal, deleteFunc, id }) => {
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size={"md"}>
        <Modal.Header>
          <Typography style="h2">Delete {modalName}</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
            Are you sure you want to delete the {modalName.toLowerCase()}? This
            action cannot be undone.
          </Typography>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Continue"
            onClick={() => {
              deleteFunc(id);
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

export default Alert;
