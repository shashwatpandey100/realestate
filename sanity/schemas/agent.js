export const agent = {
  name: "agent",
  title: "Agent",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Agent Name",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: "properties",
      title: "Properties",
      type: "array",
      of: [{ type: "reference", to: [{ type: "property" }] }],
    },
    {
      name: "email",
      title: "Agent Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Agent Phone",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "bio",
      title: "Agent Bio",
      type: "text",
    },
    {
      name: "instagramURL",
      title: "instagram URL",
      type: "url",
    },
    {
      name: "facebookURL",
      title: "facebook URL",
      type: "url",
    },
    {
      name: "twitterURL",
      title: "twitter URL",
      type: "url",
    },
    {
      name: "linkedinURL",
      title: "linkedin URL",
      type: "url",
    },
  ],
};
