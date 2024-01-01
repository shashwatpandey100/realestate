export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Agency')
        .child(
          S.document()
            .schemaType('agency')
            .documentId('agency')),
            ...S.documentTypeListItems().filter(listItem => !['agency'].includes(listItem.getId()))
    ])