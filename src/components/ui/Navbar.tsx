import React from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Menu from '@/components/ui/Menu'
import { IconHome2 } from '@tabler/icons-react'
import { useFactoryStore } from '@/context/factoryStore'
import { factoryMap } from '@/utils/homeless/factoryMap'

export default function Navbar() {
  return <div>Navbar placeholder</div>
}

function MobileNav({ closeMenu }: { closeMenu: () => void }) {
  const factoryId = useFactoryStore(state => state.factoryId)
  const routes = factoryMap[factoryId].routes
  const location = useLocation()
  const navigate = useNavigate()

  // refactor this 👇👇👇
  const menuActiveIndex =
    routes
      .find(r => location.pathname.includes(r.path))
      ?.subRoutes.findIndex(sr => location.pathname.includes(sr.path)) ?? 0

  return (
    <Routes>
      <Route
        index
        element={
          <Menu
            menuItems={[
              <Link
                onClick={closeMenu}
                to={'/app'}
                className='flex h-full w-full items-center justify-start gap-4 px-4'
              >
                <IconHome2 />
                <p>خانه</p>
              </Link>,
            ]}
          />
        }
      />
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path + '/*'}
          element={
            <Menu
              menuItems={[
                <Link
                  onClick={closeMenu}
                  to={'/app'}
                  className='flex h-full w-full items-center justify-start gap-4 px-4'
                >
                  <IconHome2 stroke={1.5} />
                  <p className='text-sm'>خانه</p>
                </Link>,
                ...route.subRoutes.map(subRoute => (
                  <Link
                    onClick={closeMenu}
                    className='flex h-full w-full items-center justify-start gap-4 px-4'
                    to={`/app/${route.path}/${subRoute.path}`}
                  >
                    <subRoute.icon stroke={1.5} />
                    <p className='text-sm'>{subRoute.label}</p>
                  </Link>
                )),
              ]}
              active={menuActiveIndex + 1}
            />
          }
        />
      ))}
    </Routes>
  )
}

function DesktopNav() {
  const factoryId = useFactoryStore(state => state.factoryId)
  const routes = factoryMap[factoryId].routes
  const location = useLocation()
  const navigate = useNavigate()

  // refactor this 👇👇👇
  const menuActiveIndex =
    routes
      .find(r => location.pathname.includes(r.path))
      ?.subRoutes.findIndex(sr => location.pathname.includes(sr.path)) ?? 0

  return (
    <Routes>
      <Route
        index
        element={
          <Menu
            menuItems={[
              <Link
                to={'/app'}
                className='flex h-full w-full items-center justify-center'
              >
                <span className='sr-only'>خانه</span>
                <IconHome2 stroke={1.5} />
              </Link>,
            ]}
          />
        }
      />
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path + '/*'}
          element={
            <Menu
              menuItems={[
                <Link
                  to={'/app'}
                  className='flex h-full w-full items-center justify-center'
                >
                  <span className='sr-only'>خانه</span>
                  <IconHome2 stroke={1.5} />
                </Link>,
                ...route.subRoutes.map(subRoute => (
                  <Link
                    className='flex h-full w-full items-center justify-center'
                    to={`/app/${route.path}/${subRoute.path}`}
                  >
                    <span className='sr-only'>{subRoute.label}</span>
                    <subRoute.icon stroke={1.5} />
                  </Link>
                )),
              ]}
              active={menuActiveIndex + 1}
            />
          }
        />
      ))}
    </Routes>
  )
}

Navbar.MobileNav = MobileNav
Navbar.DesktopNav = DesktopNav
