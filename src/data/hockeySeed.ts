export type SeedPlayer = {
  id: string
  name: string
  position: 'F' | 'D' | 'G'
  number: number
  team: string
  status: 'active' | 'ir'
}

export type SeedGame = {
  id: string
  opponent: string
  date: string
  venue: 'home' | 'away'
  status: 'scheduled' | 'final'
}

export const seedPlayers: SeedPlayer[] = [
  { id: 'p-17', name: 'Alex Mercer', position: 'F', number: 17, team: 'Home Club', status: 'active' },
  { id: 'p-4', name: 'Jordan Lee', position: 'D', number: 4, team: 'Home Club', status: 'active' },
  { id: 'p-30', name: 'Sam Ortiz', position: 'G', number: 30, team: 'Home Club', status: 'active' },
  { id: 'p-9', name: 'Riley Chen', position: 'F', number: 9, team: 'Home Club', status: 'ir' },
  { id: 'p-11', name: 'Casey Blake', position: 'D', number: 11, team: 'Home Club', status: 'active' },
  { id: 'p-22', name: 'Morgan Patel', position: 'F', number: 22, team: 'Home Club', status: 'active' },
]

export const seedGames: SeedGame[] = [
  { id: 'g-1', opponent: 'North Bay', date: '2026-10-01', venue: 'home', status: 'scheduled' },
  { id: 'g-2', opponent: 'River City', date: '2026-10-05', venue: 'away', status: 'scheduled' },
  { id: 'g-3', opponent: 'Lakeside', date: '2026-09-28', venue: 'home', status: 'final' },
]