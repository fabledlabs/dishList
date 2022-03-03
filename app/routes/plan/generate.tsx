import * as React from 'react'
import { ActionFunction, Form } from 'remix'
import { db } from '~/lib/prisma/db.server'

export const action: ActionFunction = async () => {
  //await db.plan.create()
}

export default function Generate() {
  return (
    <section>
      <h1>It's meal roulette time!</h1>
      <p>This will be for you meals the week of 1/22</p>
      <Form method="post">
        <button type="submit">Show me the meals</button>
      </Form>
    </section>
  )
}
