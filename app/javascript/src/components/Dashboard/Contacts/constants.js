import * as yup from "yup";

const INITIAL_CONTACT_LIST = [
  {
    id: 1,
    firstName: "Oliver",
    lastName: "Smith",
    role: { label: "Owner", value: "Owner" },
    email: "oliversmith@example.com",
    createdAt: "Oct 14th, 2021"
  },
  {
    id: 2,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "Owner" },
    email: "ronaldrichards@example.com",
    createdAt: "Oct 14th, 2021"
  },
  {
    id: 3,
    firstName: "Jacob",
    lastName: "Johns",
    role: { label: "Owner", value: "Owner" },
    email: "jacobjohns@example.com",
    createdAt: "Oct 14th, 2021"
  }
];

const INITIAL_ADD_CONTACT_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  role: ""
};

const VALIDATE_CONTACT_FORM = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  role: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Role required")
});

const ROLE_OPTIONS = [
  {
    label: "Owner",
    value: "Owner"
  },
  {
    label: "Admin",
    value: "Admin"
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
];

export {
  INITIAL_CONTACT_LIST,
  INITIAL_ADD_CONTACT_FORM,
  VALIDATE_CONTACT_FORM,
  ROLE_OPTIONS
};
