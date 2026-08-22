SSR (Server-Side Rendering)
The server builds the full HTML page before sending it to the browser. The user sees real content immediately instead of a blank page while JavaScript loads.

Why it matters: Fast first paint, works on slow connections, link previews work in messaging apps

CSR (Client-Side Rendering)
The server sends an empty HTML shell. JavaScript loads and builds the page in the browser.

Why it matters: It's the default React behavior — but slow on bad connections and invisible to link previews

Hydration
After the server sends HTML, JavaScript "wakes up" the page by attaching to the existing HTML — wiring up buttons, state, interactivity. It doesn't repaint, just attaches.

Think of it as: The HTML is the skeleton, hydration adds the muscles

Routes
A route is a URL path that maps to a page. /players is a route. /games is a route.

Static route
A fixed URL that never changes. /players always means the players list.

Dynamic route
A URL with a changing piece. /players/$playerId means any player — /players/42, /players/7, etc.

Path params
The changing piece IN the URL path. In /players/42, the 42 is a path param called playerId.

Used for: Identifying one specific thing (one player, one game)

Search params
The ?key=value part after the URL. /players?position=F filters the list to forwards.

Used for: Filtering or sorting a list page
Different from path params: Search params filter a list; path params identify one item

Route tree
The map of all URL paths your app knows about. TanStack auto-generates this from your files in src/routes/.

Root layout (__root.tsx)
The shared wrapper around every page — header, nav, the <Outlet /> where child pages appear.

Outlet
The placeholder in the root layout where the current page renders. Without it, child pages never show up.

File-based routing
The folder/filename structure mirrors the URL. src/routes/players/index.tsx → /players. src/routes/players/$playerId.tsx → /players/42.

Validation
Checking that URL params are safe before using them. If someone types /players/ with nothing after it, validation catches that and shows a safe error instead of crashing.

Type-safe links
Using <Link to="/players/$playerId" params={{ playerId: p.id }}> instead of <a href="/players/42">. The router checks that the path is real — typos get caught before they ship.

How they all connect:

User visits /players?position=F
        ↓
Route tree matches → players/index.tsx
        ↓
validateSearch checks position=F is valid
        ↓
Page renders inside __root.tsx (header + nav + Outlet)
        ↓
User clicks a player link → /players/42
        ↓
Route tree matches → players/$playerId.tsx
        ↓
parsePlayerIdParam validates "42" is non-empty
        ↓
Player detail page renders inside same root layout
        ↓
Server sends full HTML (SSR) → browser hydrates