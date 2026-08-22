import { Link, useRouterState } from '@tanstack/react-router'

export function AppNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  const linkClass = 'text-slate-700 hover:text-slate-900'
  const activeClass = 'text-sky-700 underline font-bold'

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <nav
      aria-label="Main"
      className="flex flex-wrap gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium"
    >
      <Link to="/" className={isActive('/') ? activeClass : linkClass}>
        Home
      </Link>
      <Link to="/players" className={isActive('/players') ? activeClass : linkClass}>
        Players
      </Link>
      <Link to="/games" className={isActive('/games') ? activeClass : linkClass}>
        Games
      </Link>
    </nav>
  )
}