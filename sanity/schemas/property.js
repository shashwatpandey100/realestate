export const property = {
    name: "property",
    title: "Property",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Property Title",
        type: "string",
        validation: (Rule) => Rule.required().min(10).max(80),
      },
      {
        name: "type",
        title: "Listing Type",
        type: "string",
        options: {
          list: ["For Sale", "For Rent"],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Property Description",
        type: "text",
      },
      {
        name: "category",
        title: "Property's Category",
        type: "reference",
        to: [{ type: "category" }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: "images",
        title: "Property Images",
        type: "array",
        validation: (Rule) => Rule.max(12).warning("Please keep it under 12 images for better performance."),
        of: [
          {
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
        ],
      },
      {
        name: "agent",
        title: "Listing Agent",
        type: "reference",
        to: [{ type: "agent" }],
      },
      {
        name: "areaSize",
        title: "Area Size (sq ft)",
        type: "number",
        validation: (Rule) => Rule.required().min(1),
      },
      {
        name: "price",
        title: "Price (INR)",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: "bedrooms",
        title: "Number of Bedrooms",
        type: "number",
      },
      {
        name: "bathrooms",
        title: "Number of Bathrooms",
        type: "number",
      },
      {
        name: "amenities",
        title: "Amenities",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "yearBuilt",
        title: "Year Built",
        type: "date",
        options: {
          dateFormat: "YYYY",
        },
      },
      {
        name: "isFeatured",
        title: "Featured Property",
        type: "boolean",
      },
      {
        name: "youtubeVideo",
        title: "YouTube Video Link",
        type: "url",
        validation: (Rule) =>
          Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }).error('Please enter a valid YouTube video URL.'),
      },
      {
        name: "googleMapLink",
        title: "GoogleMap Embed Link",
        type: "url",
        validation: (Rule) =>
          Rule.uri({
            scheme: ['http', 'https'],
            allowRelative: false,
          }).error('Please enter a valid GoogleMaps URL.'),
      },
    ],
  };
  