import * as yup from "yup";

const INITIAL_NOTES_LIST = [
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

const INITIAL_ADD_NOTES_FORM = {
  title: "",
  description: "",
  role: {},
  tags: []
};

const VALIDATE_NOTES_FORM = yup.object({
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

const ROLE_OPTIONS = [
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

const TAGS_OPTIONS = [
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
  INITIAL_NOTES_LIST,
  INITIAL_ADD_NOTES_FORM,
  VALIDATE_NOTES_FORM,
  ROLE_OPTIONS,
  TAGS_OPTIONS
};
