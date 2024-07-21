import { create } from 'zustand'

/**
 * "1" === Setare factory
 */

const initialFactoryStoreStore = () => ({
  factoryId: '1',
})

type FactoryState = ReturnType<typeof initialFactoryStoreStore>

export const useFactoryStore = create<FactoryState>(initialFactoryStoreStore)

export const setFactoryId = (newFactory: string) =>
  useFactoryStore.setState({ factoryId: newFactory })
