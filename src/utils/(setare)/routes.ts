import crusherImg from '@/images/icons/crusher.webp'
import bodyPrepImg from '@/images/icons/body-prep.webp'
import mucilageImg from '@/images/icons/mucilage.webp'
import pressImg from '@/images/icons/press.webp'
import furnaceImg from '@/images/icons/furnace.webp'
import glazingImg from '@/images/icons/glazing.webp'
import cuttingImg from '@/images/icons/cutting.webp'
import polishImg from '@/images/icons/polish.webp'
import packagingImg from '@/images/icons/packaging.webp'
import warehouseImg from '@/images/icons/warehouse.webp'
import productionImg from '@/images/icons/production.webp'
import powerSupplyImg from '@/images/icons/power-supply.webp'
import Crusher from '@/pages/(setare)/crusher'
import BodyPrep from '@/pages/(setare)/body-prep'
import Mucilage from '@/pages/(setare)/mucilage'
import Press from '@/pages/(setare)/press'
import Furnace from '@/pages/(setare)/furnace'
import Glazing from '@/pages/(setare)/glazing'
import Cutting from '@/pages/(setare)/cutting'
import Polish from '@/pages/(setare)/polish'
import Packaging from '@/pages/(setare)/packaging'
import Warehouse from '@/pages/(setare)/warehouse'
import Production from '@/pages/(setare)/production'
import PowerSupply from '@/pages/(setare)/power-supply'
import { IconDeviceDesktopAnalytics, IconGauge } from '@tabler/icons-react'

const defaultSubRoutes = [
  { path: 'live', icon: IconGauge, label: 'مانیتورینگ' },
  { path: 'report', icon: IconDeviceDesktopAnalytics, label: 'گزارشات' },
]

export const routes = [
  {
    label: 'سنگ شکن',
    icon: crusherImg,
    path: 'crusher',
    element: Crusher,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'تابلو برق',
    icon: powerSupplyImg,
    path: 'power-supply',
    element: PowerSupply,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'تهیه بدنه',
    icon: bodyPrepImg,
    path: 'body-prep',
    element: BodyPrep,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'لعاب سازی',
    icon: mucilageImg,
    path: 'mucilage',
    element: Mucilage,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'پرس',
    icon: pressImg,
    path: 'press',
    element: Press,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'کوره',
    icon: furnaceImg,
    path: 'furnace',
    element: Furnace,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'خط لعاب',
    icon: glazingImg,
    path: 'glazing',
    element: Glazing,
    subRoutes: defaultSubRoutes,
  },
  // {
  //   label: 'برش',
  //   icon: cuttingImg,
  //   path: 'cutting',
  //   element: Cutting,
  //   subRoutes: defaultSubRoutes,
  // },
  {
    label: 'پولیش',
    icon: polishImg,
    path: 'polish',
    element: Polish,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'بسته بندی',
    icon: packagingImg,
    path: 'packaging',
    element: Packaging,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'انبار محصول',
    icon: warehouseImg,
    path: 'warehouse',
    element: Warehouse,
    subRoutes: defaultSubRoutes,
  },
  {
    label: 'تولید',
    icon: productionImg,
    path: 'production',
    element: Production,
    subRoutes: defaultSubRoutes,
  },
]
