import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Portfolio")
    .items([
      // S.listItem()
      //   .title("Test")
      //   .child(S.document().schemaType("teampage").documentId("teampage")),
      ...S.documentTypeListItems(),
    ]);
