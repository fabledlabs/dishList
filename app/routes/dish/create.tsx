import React, { useState, Fragment } from 'react'
import { ActionFunction, Form } from 'remix'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { db } from '~/lib/prisma/db.server'
import { enumList } from '~/utils'
import { Measurements, DishType } from '~/types'

export const action: ActionFunction = async () => {
  //await db.plan.create()
}

const SelectMeasurement: React.FC = () => {
  const measurements = enumList<Measurements>(Measurements)
  const [measurement, setMeasurement] = useState(measurements[0])
  return (
    <Listbox value={measurement} onChange={setMeasurement}>
      <Listbox.Button>{measurement}</Listbox.Button>
      <Listbox.Options>
        {measurements.map((current, i) => (
          <Listbox.Option key={`measurement-${current}-${i}`} value={current}>
            {measurement}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default function CreateRoute() {
  const dishTypes = enumList<DishType>(DishType)
  console.log(dishTypes)
  const [dishType, setDishType] = useState<DishType>(DishType.Main)
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Create a dish
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p>This will be for you meals the week of 1/22</p>
          <Form method="post" className="mt-6 space-y-3">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                  placeholder="Roasted Brussel Sprouts"
                  required
                />
              </div>
            </div>
            <Listbox value={dishType} onChange={setDishType}>
              <div className="space-y-1">
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Dish Type:
                </Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm">
                    <span className="block truncate capitalize">
                      {dishType}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {dishTypes.map((current, i) => (
                        <Listbox.Option
                          key={`dishType-${current}-${i}`}
                          value={current}
                          className={({ active }) =>
                            `relative flex cursor-default select-none items-center py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-emerald-100 text-emerald-900'
                                : 'text-gray-900'
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block flex-1 truncate capitalize ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {current}
                              </span>
                              {selected ? (
                                <span className="flex items-center pl-3 text-emerald-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            </Listbox>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Create dish
            </button>
          </Form>
        </div>
      </main>
    </>
  )
}
