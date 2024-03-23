import type { CollectionConfig } from 'payload/types'

import isAdminOrSelf from './access/isAdminOrSelf'
import isAnyone from './access/isAnyone'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: isAdminOrSelf,
    create: isAnyone,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}
