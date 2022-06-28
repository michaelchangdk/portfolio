export default {
  name: "featuredprojects",
  title: "Featured Projects Page",
  type: "document",
  __experimental_actions: ["create", "update", /*"delete",*/ "publish"],
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "featured",
      title: "Featured projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
    },
  ],
};
