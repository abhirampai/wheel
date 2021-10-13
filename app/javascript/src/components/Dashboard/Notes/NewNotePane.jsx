import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane } from "neetoui/v2";
import { Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import * as yup from "yup";

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
        initialValues={{
          title: "",
          description: "",
          role: {},
          tags: []
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object({
          title: yup.string().required("Title is required"),
          description: yup.string().required("Description is required"),
          role: yup.object().required("Role required"),
          tags: yup.array().required("Tag required")
        })}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <Pane.Body>
              <Input
                label="Title"
                name="title"
                className="mb-6"
                placeholder="Enter Title"
                required={true}
              />
              <Input
                label="Description"
                name="description"
                className="mb-6"
                placeholder="Enter Description"
                size={"large"}
                required={true}
              />
              <div className="mb-6">
                <Select
                  isClearable
                  isSearchable
                  required={true}
                  label="Assigned Contact"
                  name="role"
                  options={[
                    {
                      label: "Value One",
                      value: "value1"
                    },
                    {
                      label: "Value Two",
                      value: "value2"
                    },
                    {
                      label: "Value Three",
                      value: "value3"
                    },
                    {
                      label: "Value Four",
                      value: "value4"
                    },
                    {
                      label: "Value Five",
                      value: "value5"
                    }
                  ]}
                  placeholder="Select a Role"
                />
              </div>
              <div className="mb-6">
                <Select
                  isClearable
                  isSearchable
                  required={true}
                  isMulti
                  label="Tags"
                  name="tags"
                  options={[
                    {
                      label: "Getting Started",
                      value: "Getting Started"
                    },
                    {
                      label: "Onboarding",
                      value: "Onboarding"
                    },
                    {
                      label: "User Flow",
                      value: "User Flow"
                    },
                    {
                      label: "UX",
                      value: "UX"
                    },
                    {
                      label: "Bugs",
                      value: "Bugs"
                    }
                  ]}
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
