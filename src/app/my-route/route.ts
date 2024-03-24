import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'diary',
    depth: 0,
    where: {
      and: [
        {
          user: {
            equals: 1,
          },
        },
        {
          date: {
            greater_than: '2024-03-23',
          },
        },
        {
          date: {
            less_than: '2024-03-24',
          },
        },
      ],
    },
  })

  return Response.json(data)
}
