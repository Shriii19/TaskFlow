# TaskFlow

A modern, full‑stack project management app — React + TypeScript frontend with a lightweight PHP/MySQL backend. Clean UI, a Kanban task board, project overviews, and an interactive 3D visualization.

---

## ✅ What I changed
- Polished wording and layout for clarity.
- Fixed backend-hosting notes and clarified how the frontend locates the API (see "Backend" below).
- Kept all technical details and endpoints unchanged.

---

## 🚀 Key features
- Interactive dashboard with charts and project metrics
- 3D project visualization (Three.js / @react-three/fiber)
- Project CRUD and progress indicators
- Kanban-style task board (static today — drag & drop planned)
- Role-based team management and secure authentication
- Responsive UI with Tailwind CSS and smooth animations (Framer Motion)

## 🛠 Stack (high level)
- Frontend: React 18, TypeScript, Vite, Tailwind CSS
- UI / animation: Shadcn/UI, Lucide, Framer Motion
- 3D: three, @react-three/fiber, @react-three/drei
- State/requests: TanStack React Query, axios
- Backend: PHP 8.x, MySQL (PDO)

---

## ⚙️ Quick start
1. Prepare the database:
   - Create a MySQL database named `taskflow` and import `database/schema.sql`.
2. Start the backend (two options — see note below):
   - XAMPP / Apache (recommended default for this repo): make the `backend` folder available at `/taskflow` so the API is reachable at `http://localhost/taskflow/api`.
   - PHP built-in server (dev):
     ```bash
     cd backend
     php -S localhost:8000
     ```
     If you use the built-in server, update the frontend API base URL in `src/services/api.ts` to `http://localhost:8000/api`.
3. Start the frontend:
   ```bash
   npm install
   npm run dev
   ```
   Open the URL shown by Vite (default: `http://localhost:5173`).

> Note: The frontend's default API base is `http://localhost/taskflow/api` (configured in `src/services/api.ts`). Change it if you serve the backend on a different host/port.

---

## 📂 Project layout (short)
- `backend/` — PHP API endpoints and DB config
- `database/` — SQL schema
- `src/` — React app (components, pages, services)
- `src/services/api.ts` — axios instance / API base URL

---

## 🔌 API (examples)
Authentication
- POST `/api/auth/register.php` — register
- POST `/api/auth/login.php` — login

Projects
- GET `/api/projects/index.php` — list
- POST `/api/projects/index.php` — create
- PUT `/api/projects/index.php` — update
- DELETE `/api/projects/index.php` — delete

Tasks
- GET `/api/tasks/index.php`
- POST `/api/tasks/index.php`
- PUT `/api/tasks/index.php`
- DELETE `/api/tasks/index.php`

Users
- GET `/api/users/index.php`

---

## 🧪 Testing & dev scripts
- Start dev server: `npm run dev`
- Build: `npm run build` (or `npm run build:dev`)
- Lint: `npm run lint`
- Tests: `npm run test` / `npm run test:watch`

---

## 🐛 Troubleshooting
- Backend unreachable? verify MySQL + `backend/config/database.php` and ensure the API base URL in `src/services/api.ts` matches where you serve the PHP backend.
- If using php -S on port 8000: set `API_URL` in `src/services/api.ts` to `http://localhost:8000/api`.
- Frontend errors: clear `node_modules` and reinstall, check browser console and network requests.

---

## Contributing
PRs welcome — keep changes focused and include tests where practical.





## License
MIT
