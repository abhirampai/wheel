import * as yup from "yup";

const initialNotesList = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: [{ label: "Getting Started", value: "Getting Started" }]
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: [{ label: "Getting Started", value: "Getting Started" }]
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: [{ label: "Getting Started", value: "Getting Started" }]
  }
];

const initialContactList = [
  {
    id: 1,
    name: "Oliver Smith",
    role: "Owner",
    email: "oliversmith@example.com",
    createdAt: "Oct 14th, 2021"
  },
  {
    id: 2,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronaldrichards@example.com",
    createdAt: "Oct 14th, 2021"
  },
  {
    id: 3,
    name: "Jacob Johns",
    role: "Owner",
    email: "jacobjohns@example.com",
    createdAt: "Oct 14th, 2021"
  }
];

const initialAddNotesForm = {
  title: "",
  description: "",
  role: {},
  tags: []
};

const validateNotesForm = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  role: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Role required"),
  tags: yup.array().min(1).required("Tag required")
});

const roleOptions = [
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
];

const tagsOptions = [
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
];

export {
  initialNotesList,
  initialContactList,
  initialAddNotesForm,
  validateNotesForm,
  roleOptions,
  tagsOptions
};
