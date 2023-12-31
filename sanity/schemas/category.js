export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
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
