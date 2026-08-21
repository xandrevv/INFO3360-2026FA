import { createFileRoute, Link } from '@tanstack/react-router'
import { validatePlayersSearch, type PlayersSearch } from '../../lib/searchSchemas'

export const Route = createFileRoute('/players/')({
  validateSearch: (search: Record<string, unknown>): PlayersSearch =>
    validatePlayersSearch(search),
  component: PlayersIndexPage,
})

const demoPlayers = [
  { id: '42', name: 'Avery Skater', position: 'F', status: 'active' },
  { id: '7', name: 'Riley Goalie', position: 'G', status: 'active' },
  { id: '11', name: 'Casey Defense', position: 'D', status: 'ir' },
]

function PlayersIndexPage() {
  const { position, status } = Route.useSearch()

  const filtered = demoPlayers.filter(
    (p) =>
      (position === 'all' || p.position === position) &&
      (status === 'all' || p.status === status),
  )

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">Players</h1>
      <p className="mt-2 text-slate-600">
        Active filters: position={position}, status={status}
      </p>
      <nav className="mt-4 flex gap-3 text-sm">
        <Link to="/players" search={{ position: 'F', status }}>Forwards</Link>
        <Link to="/players" search={{ position: 'D', status }}>Defense</Link>
        <Link to="/players" search={{ position: 'G', status }}>Goalies</Link>
        <Link to="/players" search={{ position: 'all', status: 'active' }}>Reset</Link>
      </nav>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        {filtered.map((p) => (
          <li key={p.id}>
            <Link
              to="/players/$playerId"
              params={{ playerId: p.id }}
              className="text-blue-700 underline"
            >
              {p.name} ({p.position})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}