import { seedPlayers, seedGames, type SeedPlayer, type SeedGame } from '../data/hockeySeed'

export function listPlayers(filters?: { position?: string; status?: string }): SeedPlayer[] {
  let rows = [...seedPlayers]
  if (filters?.position && filters.position !== 'all') {
    rows = rows.filter((p) => p.position === filters.position)
  }
  if (filters?.status && filters.status !== 'all') {
    rows = rows.filter((p) => p.status === filters.status)
  }
  return rows
}

export function getPlayerById(playerId: string): SeedPlayer | undefined {
  return seedPlayers.find((p) => p.id === playerId)
}

export function listGames(filters?: { team?: string; date?: string }): SeedGame[] {
  let rows = [...seedGames]
  if (filters?.team) {
    rows = rows.filter((g) =>
      g.opponent.toUpperCase().includes(filters.team!.toUpperCase()),
    )
  }
  if (filters?.date) {
    rows = rows.filter((g) => g.date === filters.date)
  }
  return rows
}