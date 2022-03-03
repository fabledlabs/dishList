import * as Fathom from 'fathom-client'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { useEnv } from '~/hooks/useEnv'

export function FathomProvider() {
  const fathomLoaded = useRef(false)
  const location = useLocation()
  const ENV = useEnv()

  useEffect(
    function setupFathom() {
      if (!fathomLoaded.current && ENV.FATHOM_ID) {
        Fathom.load(ENV.FATHOM_ID, {
          includedDomains: ['fabledlabs.com'],
          excludedDomains: ['fly.io,localhost'],
          spa: 'auto',
        })
        fathomLoaded.current = true
      } else {
        Fathom.trackPageview()
      }
    },
    [location, ENV]
  )

  return null
}
