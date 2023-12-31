export const agency = {
  name: "agency",
  title: "Agency",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Agency Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "logo",
      title: "Logo",
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
      name: "youtubeURL",
      title: "Youtube URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid YouTube video URL."),
    },
    {
      name: "googleReviewsURL",
      title: "Google Reviews URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid Google Reviews URL."),
    },
    {
      name: "googleMapEmbedURL",
      title: "GoogleMap Embed URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid Google Maps embed URL."),
    },
    {
      name: "instagramURL",
      title: "Instagram URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid Instagram URL."),
    },
    {
      name: "facebookURL",
      title: "Facebook URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid Facebook URL."),
    },
    {
      name: "twitterURL",
      title: "Twitter URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid Twitter URL."),
    },
    {
      name: "linkedinURL",
      title: "Linkedin URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }).error("Please enter a valid Linkedin URL."),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "bgVideoURL",
      title: "Background Video URL For Homapage",
      type: "url",
    },
    {
      name: "interviewVideoURL",
      title: "Interview Video URL For Homapage",
      type: "url",
    },
  ],
};
