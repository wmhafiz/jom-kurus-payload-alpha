import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'weights',
    depth: 0,
    where: {
      and: [
        {
          user: {
            equals: 1,
          },
        },
      ],
    },
  })

  return Response.json(data)
}
