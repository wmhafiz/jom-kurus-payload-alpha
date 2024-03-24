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
import { Media } from '@/payload/collections/Media'
import { Challenges } from '@/payload/collections/Challenges'
// import { ActivityLogs } from '@/payload/collections/ActivityLogs'
import { Meals } from '@/payload/collections/Meals'
import { Diary } from '@/payload/collections/Diary'
import { Exercises } from '@/payload/collections/Exercises'
import { Workouts } from '@/payload/collections/Workouts'
import { Weights } from '@/payload/collections/Weights'
import { BeforeDashboard } from '@/payload/components/BeforeDashboard'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const adminUser = {
  email: 'fizyboy@gmail.com',
  password: 'fawwaz',
  nickname: 'Pakcu',
}

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Media, Challenges, Diary, Meals, Exercises, Workouts, Weights],
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
    components: {
      beforeDashboard: [BeforeDashboard],
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
