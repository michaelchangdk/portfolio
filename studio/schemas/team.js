export default {
  name: "teampage",
  title: "Team Page",
  type: "document",
  __experimental_actions: ["create", "update", /*"delete",*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Option to add a subtitle to the page.",
    },
  ],
};
