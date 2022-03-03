import type { LoaderFunction } from 'remix'
import { useLoaderData } from 'remix'
import type { Plan } from '@prisma/client'

import { db } from '~/lib/prisma/db.server'

type LoaderData = { plan: Plan }

export const loader: LoaderFunction = async ({ params }) => {
  const plan = await db.plan.findUnique({
    where: { id: params.planId },
  })
  if (!plan) throw new Error('Plan not found')
  const data: LoaderData = { plan }
  return data
}

export default function PlanRoute() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <p>Plan:</p>
      <p>{data.plan.id}</p>
    </div>
  )
}
