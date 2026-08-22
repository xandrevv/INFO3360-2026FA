import { createFileRoute, Link } from '@tanstack/react-router'
import { validateGamesSearch, type GamesSearch } from '../../lib/searchSchemas'
import { listGames } from '../../server/directoryLoader'

export const Route = createFileRoute('/games/')({
  validateSearch: (search: Record<string, unknown>): GamesSearch =>
    validateGamesSearch(search),
  loader: async () => {
    const games = listGames()
    return { games }
  },
  component: GamesIndexPage,
})

function GamesIndexPage() {
  const { games: allGames } = Route.useLoaderData()
  const { team, date } = Route.useSearch()

  const games = allGames.filter(
    (g) =>
      (!team || g.opponent.toUpperCase().includes(team.toUpperCase())) &&
      (!date || g.date === date),
  )

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">Games</h1>
      <p className="mt-2 text-slate-600">
        Active filters: team={team || 'all'}, date={date || 'all'}
      </p>
      <nav className="mt-4 flex gap-3 text-sm">
        <Link to="/games" search={{ team: 'North Bay', date }}>North Bay</Link>
        {' · '}
        <Link to="/games" search={{ team: 'River City', date }}>River City</Link>
        {' · '}
        <Link to="/games" search={{ team: '', date: '' }}>Reset</Link>
      </nav>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        {games.map((g) => (
          <li key={g.id}>
            {g.venue === 'home' ? 'vs' : '@'} {g.opponent} — {g.date} ({g.status})
          </li>
        ))}
      </ul>
    </main>
  )
}