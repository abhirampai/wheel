import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane } from "neetoui/v2";
import { Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  INITIAL_ADD_NOTES_FORM,
  ROLE_OPTIONS,
  TAGS_OPTIONS,
  VALIDATE_NOTES_FORM
} from "./constants";

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
        initialValues={INITIAL_ADD_NOTES_FORM}
        onSubmit={handleSubmit}
        validationSchema={VALIDATE_NOTES_FORM}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <Pane.Body>
              <div className="w-full space-y-6">
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
                  size="large"
                  required={true}
                />
                <Select
                  isClearable
                  isSearchable
                  required={true}
                  label="Assigned Contact"
                  name="role"
                  options={ROLE_OPTIONS}
                  placeholder="Select a Role"
                />
                <Select
                  isClearable
                  isSearchable
                  required={true}
                  isMulti
                  label="Tags"
                  name="tags"
                  options={TAGS_OPTIONS}
                  placeholder="Select Tags"
                />
              </div>
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
