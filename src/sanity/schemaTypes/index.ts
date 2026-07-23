import { contentType } from './contentType';
import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import testimonialType from './testimonialType'
import { doctorType } from './doctorType'
import beforeAfter  from './beforeAfterType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, testimonialType, doctorType, contentType,beforeAfter],
}
