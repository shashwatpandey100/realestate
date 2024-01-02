export const classification = {
    name: "classification",
    title: "Classification",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Classification Name",
        type: "string",
        validation: (Rule) => Rule.required().min(3).max(50),
      },
      {
        name: "description",
        title: "Category Description",
        type: "text",
      },
    ],
  };
  