import { createFileRoute, Link } from '@tanstack/react-router'
import { parsePlayerIdParam } from '../../lib/playerParams'
import { getPlayerById } from '../../server/directoryLoader'
import { NotFoundPlayer } from '../../components/NotFoundPlayer'

export const Route = createFileRoute('/players/$playerId')({
  params: {
    parse: (raw) => ({ playerId: parsePlayerIdParam(raw.playerId) }),
    stringify: ({ playerId }) => ({ playerId: String(playerId) }),
  },
  loader: async ({ params }) => {
    const player = getPlayerById(params.playerId)
    return { player }
  },
  component: PlayerDetailPage,
})

function PlayerDetailPage() {
  const { playerId } = Route.useParams()
  const { player } = Route.useLoaderData()

  if (!player) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <NotFoundPlayer playerId={playerId} />
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <p className="mb-4 text-sm">
        <Link to="/players" className="text-blue-700 underline">
          ← Back to players
        </Link>
      </p>
      <h1 className="text-2xl font-semibold">
        #{player.number} {player.name}
      </h1>
      <dl className="mt-4 space-y-2 text-slate-700">
        <div><dt className="font-medium">Position</dt><dd>{player.position}</dd></div>
        <div><dt className="font-medium">Team</dt><dd>{player.team}</dd></div>
        <div><dt className="font-medium">Status</dt><dd>{player.status}</dd></div>
      </dl>
      <div className="mt-6">
        <Link
          to="/games"
          search={{ team: '', date: '' }}
          className="text-blue-700 underline"
        >
          View games schedule →
        </Link>
      </div>
    </main>
  )
}