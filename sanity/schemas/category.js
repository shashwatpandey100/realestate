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
      name: "properties",
      title: "Properties",
      type: "array",
      of: [{ type: "reference", to: [{ type: "property" }] }],
    },
    {
      name: "description",
      title: "Category Description",
      type: "text",
    },
  ],
};
