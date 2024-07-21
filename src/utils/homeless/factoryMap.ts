import Setare from '@/pages/(setare)'
import { routes } from '@/utils/(setare)/routes'

export const factoryMap: FactoryMap = {
  '1': { root: Setare, routes },
}

type FactoryMap = Record<
  string,
  { root: () => React.JSX.Element; routes: typeof routes }
>
