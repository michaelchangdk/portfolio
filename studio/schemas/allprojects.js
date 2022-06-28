export default {
  name: "allprojects",
  title: "All Projects Page",
  type: "document",
  __experimental_actions: ["create", "update", /*"delete",*/ "publish"],
  fields: [
    { name: "title", title: "Title", type: "string", readOnly: true },
    {
      name: "allprojects",
      title: "All projects",
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
