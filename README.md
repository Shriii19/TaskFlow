# TaskFlow

TaskFlow is a modern, full-stack project management application designed to streamline personal and team productivity. Built with React, TypeScript, and PHP/MySQL, it features interactive 3D visualizations, real-time task tracking, and comprehensive team collaboration tools.

## 🚀 Features

- **Interactive Dashboard**: Real-time overview of projects, tasks, and team productivity with dynamic charts and stats.
- **3D Project Visualization**: Unique interactive 3D scene using Three.js (@react-three/fiber) to visualize project status.
- **Project Management**: Create, edit, and track projects with progress bars and status indicators.
- **Task Management**: Kanban-style task board with drag-and-drop capabilities (in progress), filtering, and priority management.
- **Team Collaboration**: Role-based access control (Admin, Project Manager, Team Member) and team member management.
- **Secure Authentication**: User registration and login system with secure password hashing.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and Shadcn/UI.
- **Smooth Animations**: Enhanced user experience with Framer Motion transitions.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI, Lucide React
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **State Management**: TanStack React Query, Context API
- **Routing**: React Router DOM

### Backend
- **Language**: PHP 8.x
- **Database**: MySQL
- **API Architecture**: RESTful API
- **Security**: PDO for database interactions, CORS enabled

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- PHP (v8.0+)
- MySQL Server (e.g., via XAMPP, WAMP, or standalone)
- Git

### 1. Database Setup
1. Start your MySQL server.
2. Create a new database named `taskflow`.
3. Import the schema file located at `database/schema.sql` into the `taskflow` database.

### 2. Backend Setup
1. Configure the database connection in `backend/config/database.php` if your credentials differ from the defaults (User: `root`, Password: empty).
2. Start the PHP development server:
   ```bash
   cd backend
   php -S localhost:8000
   ```
   *Note: Ensure the backend runs on port 8000 as the frontend is configured to communicate with this port.*

### 3. Frontend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the local URL provided by Vite (typically `http://localhost:5173`).

## 📂 Project Structure

```
TaskFlow/
├── backend/                # PHP Backend
│   ├── api/                # API Endpoints (Auth, Projects, Tasks, Users)
│   │   ├── auth/          # Authentication endpoints
│   │   ├── projects/      # Project management endpoints
│   │   ├── tasks/         # Task management endpoints
│   │   └── users/         # User management endpoints
│   └── config/             # Database Configuration
├── database/               # SQL Schema
│   └── schema.sql          # Database structure
├── src/                    # React Frontend
│   ├── components/         # Reusable UI Components
│   │   ├── 3d/            # Three.js 3D components
│   │   ├── home/          # Landing page components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── ui/            # Shadcn UI components
│   ├── context/            # React Context (AuthContext)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Application Pages
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── Projects.tsx    # Project management
│   │   ├── Tasks.tsx       # Task management
│   │   ├── Team.tsx        # Team collaboration
│   │   └── ...
│   ├── services/           # API Service Integration
│   └── test/               # Test files
└── ...
```

## � Testing

Run tests using Vitest:

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register.php` - User registration
- `POST /api/auth/login.php` - User login

### Projects
- `GET /api/projects/index.php` - Get all projects
- `POST /api/projects/index.php` - Create new project
- `PUT /api/projects/index.php` - Update project
- `DELETE /api/projects/index.php` - Delete project

### Tasks
- `GET /api/tasks/index.php` - Get all tasks
- `POST /api/tasks/index.php` - Create new task
- `PUT /api/tasks/index.php` - Update task
- `DELETE /api/tasks/index.php` - Delete task

### Users
- `GET /api/users/index.php` - Get all users

## 🛠️ Development

### Building for Production

```bash
# Build the frontend
npm run build

# Build for development mode
npm run build:dev
```

### Linting

```bash
npm run lint
```

## 📝 Environment Variables

The backend uses the following default configuration in `backend/config/database.php`:
- **Host**: localhost
- **Database**: taskflow
- **Username**: root
- **Password**: (empty)

Modify these values if your MySQL setup differs.

## 🐛 Troubleshooting

### Backend Connection Issues
- Ensure MySQL server is running
- Verify database credentials in `backend/config/database.php`
- Check that the `taskflow` database exists and schema is imported
- Ensure PHP is running on port 8000

### Frontend Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Verify the backend URL in the API service configuration
- Check browser console for detailed error messages



## 📄 License
This project is open-source and available under the MIT License.
