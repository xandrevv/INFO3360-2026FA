import { createFileRoute, Link } from '@tanstack/react-router'
import { parsePlayerIdParam } from '../../lib/playerParams'

export const Route = createFileRoute('/players/$playerID')({
  params: {
    parse: (raw) => ({
      playerId: parsePlayerIdParam(raw.playerId),
    }),
    stringify: ({ playerId }) => ({
      playerId: String(playerId),
    }),
  },
  component: PlayerDetailPage,
})

function PlayerDetailPage() {
  const { playerId } = Route.useParams()

  return (
    <main className="mx-auto max-w-3xl p-6">
      <p className="mb-4 text-sm">
        <Link to="/players" className="text-blue-700 underline">
          ← Back to players
        </Link>
      </p>
      <h1 className="text-2xl font-semibold">Player detail</h1>
      <p className="mt-2 text-gray-700">
        Bookmarkable sheet for player{' '}
        <span className="font-mono font-medium">{playerId}</span>
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Roster fields and server-loaded stats land in a later step.
      </p>
    </main>
  )
}