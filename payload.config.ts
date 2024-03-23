import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  AlignFeature,
  BlockQuoteFeature,
  BlocksFeature,
  BoldFeature,
  CheckListFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Users } from '@/payload/collections/Users'
import { Pages } from '@/payload/collections/Pages'
import { Media } from '@/payload/collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const adminUser = {
  email: 'fizyboy@gmail.com',
  password: 'fawwaz',
  nickname: 'Pakcu',
}

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Pages, Media],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),
  admin: {
    autoLogin: {
      email: adminUser.email,
      password: adminUser.password,
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          ...adminUser,
        },
      })
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
