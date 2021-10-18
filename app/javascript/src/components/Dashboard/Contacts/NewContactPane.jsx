import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane } from "neetoui";
import { Button } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  INITIAL_ADD_CONTACT_FORM,
  ROLE_OPTIONS,
  VALIDATE_CONTACT_FORM
} from "./constants";

export default function NewContactPane({ showPane, setShowPane, addNote }) {
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
        initialValues={INITIAL_ADD_CONTACT_FORM}
        onSubmit={handleSubmit}
        validationSchema={VALIDATE_CONTACT_FORM}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <Pane.Body>
              <div className="w-full space-y-6">
                <div className="flex space-x-2">
                  <Input
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    required={true}
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    required={true}
                  />
                </div>
                <Input
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  size={"large"}
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
