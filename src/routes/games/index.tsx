import { createFileRoute, Link } from '@tanstack/react-router'
import { validateGamesSearch, type GamesSearch } from '../../lib/searchSchemas'

export const Route = createFileRoute('/games/')({
  validateSearch: (search: Record<string, unknown>): GamesSearch =>
    validateGamesSearch(search),
  component: GamesIndexPage,
})

const demoGames = [
  { id: '1', home: 'TOR', away: 'MTL', date: '2026-10-01' },
  { id: '2', home: 'VAN', away: 'CGY', date: '2026-10-02' },
  { id: '3', home: 'TOR', away: 'OTT', date: '2026-10-03' },
]

function GamesIndexPage() {
  const { team, date } = Route.useSearch()

  const filtered = demoGames.filter(
    (g) =>
      (!team || g.home === team || g.away === team) &&
      (!date || g.date === date),
  )

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">Games</h1>
      <p className="mt-2 text-slate-600">
        Active filters: team={team || 'all'}, date={date || 'all'}
      </p>
      <nav className="mt-4 flex gap-3 text-sm">
        <Link to="/games" search={{ team: 'TOR', date }}>TOR games</Link>
        <Link to="/games" search={{ team: 'VAN', date }}>VAN games</Link>
        <Link to="/games" search={{ team: '', date: '' }}>Reset</Link>
      </nav>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
        {filtered.map((g) => (
          <li key={g.id}>
            {g.home} vs {g.away} — {g.date}
          </li>
        ))}
      </ul>
    </main>
  )
}