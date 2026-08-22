import { createFileRoute, Link } from '@tanstack/react-router'
import { listPlayers, listGames } from '../server/directoryLoader'

export const Route = createFileRoute('/')({
  loader: async () => {
    const players = listPlayers()
    const games = listGames()
    return { playerCount: players.length, gameCount: games.length }
  },
  component: HomePage,
})

function HomePage() {
  const { playerCount, gameCount } = Route.useLoaderData()

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Hockey Ops Player Directory
      </h1>
      <p className="mt-2 text-slate-600">
        Staff landing page for roster and schedule entry points.
      </p>
      <div className="mt-4 rounded-md bg-slate-100 p-4 text-slate-700">
        <p>{playerCount} players in the directory</p>
        <p>{gameCount} games on the schedule</p>
      </div>
      <nav className="mt-4 flex gap-4">
        <Link to="/players" className="text-blue-700 underline">View Players</Link>
        <Link to="/games" className="text-blue-700 underline">View Games</Link>
      </nav>
    </main>
  )
}