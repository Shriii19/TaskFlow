import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { projectService, taskService } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    CheckSquare,
    Clock,
    FolderKanban,
    Loader2,
    Plus,
    TrendingUp,
    Users
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  const { data: projects, isLoading: projectsLoading, isError: projectsError, error: projectsErrorObj } = useQuery({
    queryKey: ['projects'],
    queryFn: projectService.getAll
  });

  const { data: tasks, isLoading: tasksLoading, isError: tasksError, error: tasksErrorObj } = useQuery({
    queryKey: ['tasks'],
    queryFn: taskService.getAll
  });

  const isLoading = projectsLoading || tasksLoading;
  const isError = projectsError || tasksError;
  const errorMessage = projectsErrorObj?.message || tasksErrorObj?.message || "An error occurred fetching data.";

  const stats = [
    { label: 'Active Projects', value: projects?.length || 0, change: '+0', icon: FolderKanban, trend: 'up' },
    { label: 'Tasks Completed', value: tasks?.filter((t: any) => t.status === 'completed').length || 0, change: '+0', icon: CheckSquare, trend: 'up' },
    { label: 'Team Members', value: '0', change: '+0', icon: Users, trend: 'neutral' }, // Mocked for now
    { label: 'Productivity', value: '0%', change: '+0%', icon: TrendingUp, trend: 'neutral' }, // Mocked for now
  ];

  const recentProjects = projects?.slice(0, 4) || [];
  const recentTasks = tasks?.slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
                <p className="text-muted-foreground text-lg">Here's what's happening with your projects today.</p>
              </div>
              <Button size="lg" className="shadow-lg shadow-primary/20">
                <Plus className="w-5 h-5 mr-2" />
                Create New
              </Button>
            </div>
          </motion.div>

          {isLoading ? (
             <div className="flex justify-center items-center h-64">
               <Loader2 className="w-8 h-8 animate-spin text-primary" />
             </div>
          ) : isError ? (
            <div className="flex justify-center items-center h-64 text-destructive">
               <p>Error loading data: {errorMessage}</p>
            </div>
          ) : (
          <>
          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300"></div>
                  
                  <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full">
                        {stat.change}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1.5">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-7 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">Recent Projects</h2>
                  <p className="text-sm text-muted-foreground">Track your ongoing work</p>
                </div>
                <Button variant="ghost" size="sm" className="group">
                  View All
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentProjects.map((project: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="p-5 bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl hover:from-muted/60 hover:to-muted/30 transition-all cursor-pointer border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-1">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {project.description} • Due {project.deadline}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          project.status === 'active' ? 'status-in-progress' : 'status-review'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={project.progress || 0} className="flex-1 h-2.5" />
                      <span className="text-sm font-bold text-foreground min-w-[3rem] text-right">
                        {project.progress || 0}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tasks Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-7 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">Upcoming Tasks</h2>
                  <p className="text-sm text-muted-foreground">Stay on top of deadlines</p>
                </div>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Plus className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-3">
                {recentTasks.map((task: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 2 }}
                    className="p-4 bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl hover:from-muted/60 hover:to-muted/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-5 h-5 border-2 border-muted-foreground/50 rounded group-hover:border-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {task.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{task.description}</p>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 ${
                          task.priority === 'urgent'
                            ? 'priority-urgent'
                            : task.priority === 'high'
                            ? 'priority-high'
                            : task.priority === 'medium'
                            ? 'priority-medium'
                            : 'priority-low'
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3 ml-8 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-medium">{task.due_date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-5 hover:bg-primary/5 hover:text-primary hover:border-primary/30">
                View All Tasks
              </Button>
            </motion.div>
          </div>
          </>
          )}
        </div>
      </main>
    </div>
  );
}
