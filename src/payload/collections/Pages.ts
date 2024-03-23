import type { CollectionConfig } from 'payload/types'

import isAdminOrSelf from './access/isAdminOrSelf'
import isAnyone from './access/isAnyone'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: isAdminOrSelf,
    create: isAnyone,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
