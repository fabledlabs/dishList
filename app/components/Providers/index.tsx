// import { ApolloProvider } from '@apollo/client'
import * as React from 'react'

import { FathomProvider } from './Fathom'
import { Toast } from './Toaster'

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
)

export const Providers: React.FC = ({ children }) => {
  const initialState = {
    isOpen: false,
    setIsOpen,
  }

  const [state, setState] = React.useState(initialState)

  function setIsOpen(isOpen: boolean) {
    return setState({ ...state, isOpen })
  }

  return (
    <>
      <FathomProvider />
      <Toast />

      <GlobalNavigationContext.Provider value={state}>
        {children}
      </GlobalNavigationContext.Provider>
    </>
  )
}
