import { createFileRoute, Link } from '@tanstack/react-router'
import { validatePlayersSearch, type PlayersSearch } from '../../lib/searchSchemas'
import { listPlayers } from '../../server/directoryLoader'

export const Route = createFileRoute('/players/')({
  validateSearch: (search: Record<string, unknown>): PlayersSearch =>
    validatePlayersSearch(search),
  loader: async ({ context }) => {
    return { players: listPlayers() }
  },
  component: PlayersIndexPage,
})

function PlayersIndexPage() {
  const { players: allPlayers } = Route.useLoaderData()
  const { position, status } = Route.useSearch()

  const players = allPlayers.filter(
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
        {' · '}
        <Link to="/players" search={{ position: 'D', status }}>Defense</Link>
        {' · '}
        <Link to="/players" search={{ position: 'G', status }}>Goalies</Link>
        {' · '}
        <Link to="/players" search={{ position: 'all', status: 'active' }}>Reset</Link>
      </nav>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        {players.map((p) => (
          <li key={p.id}>
            <Link
              to="/players/$playerId"
              params={{ playerId: p.id }}
              className="text-blue-700 underline"
            >
              #{p.number} {p.name} ({p.position})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}