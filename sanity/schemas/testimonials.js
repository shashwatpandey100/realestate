export const testimonials = {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required().min(3).max(50),
        },
        {
        name: "stars",
        title: "Number of stars",
        type: "number",
        validation: (Rule) => Rule.required().min(1).max(5),
        },
        {
        name: "text",
        title: "Text",
        type: "text",
        validation: (Rule) => Rule.required().min(1).max(5),
        },
        {
        name: "position",
        title: "Position",
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
    ],
}