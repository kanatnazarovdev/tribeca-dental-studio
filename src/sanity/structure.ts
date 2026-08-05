/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('contentType').title('Content Type'),
      S.divider(),
      // Render all remaining document types (testimonials, doctors, beforeAfter, blockContent)
      ...S.documentTypeListItems().filter((listItem) => {
        // @ts-ignore
        const typeName = listItem.getSchemaType()?.name
        return typeName && !['post', 'category', 'author', 'contentType'].includes(typeName)
      }),
    ])