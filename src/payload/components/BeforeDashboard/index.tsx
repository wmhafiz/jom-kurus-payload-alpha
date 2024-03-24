import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Gutter } from '@payloadcms/ui/elements/Gutter'
import { Button } from '@payloadcms/ui/elements/Button'
import { Where, AdminViewProps } from 'payload/types'
// import { useAuth } from '@payloadcms/ui/providers/Auth'
// import { User } from 'payload-types'

export const BeforeDashboard: React.FC<AdminViewProps> = async ({ initPageResult }) => {
  //   const { user } = useAuth<User>()
  const payload = await getPayload({
    config: configPromise,
  })

  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  const todayWhere: Where[] = [
    {
      date: {
        greater_than: yesterday.toString(),
      },
    },
    {
      date: {
        less_than: today.toString(),
      },
    },
  ]

  const weights = await payload.find({
    collection: 'weights',
    depth: 0,
    where: {
      and: todayWhere,
    },
  })

  return (
    <div>
      <Gutter>
        {/* <p>Hello, {user?.email} </p> */}
        <p>Pending actions today:</p>
        <Button icon="plus" buttonStyle="icon-label" iconStyle="with-border">
          Test
        </Button>
        <pre>{'initPageResult' + JSON.stringify(initPageResult, null, 2)}</pre>
      </Gutter>
    </div>
  )
}
