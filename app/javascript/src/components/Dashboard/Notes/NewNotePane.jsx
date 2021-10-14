import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane } from "neetoui/v2";
import { Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  initialAddNotesForm,
  roleOptions,
  tagsOptions,
  validateNotesForm
} from "common/constants";

export default function NewNotePane({ showPane, setShowPane, addNote }) {
  const onClose = () => setShowPane(false);
  const handleSubmit = async values => {
    addNote(values);
    setShowPane(!showPane);
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <h2>Add New Note</h2>
      </Pane.Header>
      <Formik
        initialValues={initialAddNotesForm}
        onSubmit={handleSubmit}
        validationSchema={validateNotesForm}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <Pane.Body className="space-y-6">
              <Input
                label="Title"
                name="title"
                placeholder="Enter Title"
                required={true}
              />
              <Input
                label="Description"
                name="description"
                placeholder="Enter Description"
                size={"large"}
                required={true}
              />
              <Select
                isClearable
                isSearchable
                required={true}
                label="Assigned Contact"
                name="role"
                options={roleOptions}
                placeholder="Select a Role"
              />
              <Select
                isClearable
                isSearchable
                required={true}
                isMulti
                label="Tags"
                name="tags"
                options={tagsOptions}
                placeholder="Select Tags"
              />
            </Pane.Body>
            <Pane.Footer className="flex space-x-4">
              <Button
                icon={Check}
                label="Save Changes"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
              <Button style="text" label="Cancel" onClick={onClose} />
            </Pane.Footer>
          </Form>
        )}
      </Formik>
    </Pane>
  );
}
