// This is a custom StoreProvider component used to wrap the application in a Redux provider.
// The purpose of this component is to manage the Redux store and integrate persistence via Redux Persist.

// The use of `useRef` here allows us to persist the store and persistor instances across renders,
// avoiding unnecessary reinitialization. This ensures better performance and stability across the app.

'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor, persistStore } from 'redux-persist'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>()
  const persistorRef = useRef<Persistor>()

  if (!storeRef.current) {
    const store = makeStore()
    storeRef.current = store
    persistorRef.current = persistStore(store)
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current as Persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
