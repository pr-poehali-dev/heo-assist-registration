
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

const queryClient = new QueryClient();

interface User {
  name: string;
  email: string;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);

  const handleLogin = (email: string, password: string) => {
    const userData: User = {
      name: email.split('@')[0], // Используем имя до @ как имя пользователя
      email: email
    };
    setUser(userData);
    setAuthMode(null);
  };

  const handleRegister = (email: string, password: string, name: string) => {
    const userData: User = {
      name: name,
      email: email
    };
    setUser(userData);
    setAuthMode(null);
  };

  const handleLogout = () => {
    setUser(null);
    setAuthMode(null);
  };

  const showLogin = () => setAuthMode('login');
  const showRegister = () => setAuthMode('register');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {authMode === 'login' && (
          <LoginForm 
            onLogin={handleLogin} 
            onSwitchToRegister={showRegister}
          />
        )}
        {authMode === 'register' && (
          <RegisterForm 
            onRegister={handleRegister} 
            onSwitchToLogin={showLogin}
          />
        )}
        {!authMode && !user && (
          <Index 
            onShowLogin={showLogin}
            onShowRegister={showRegister}
          />
        )}
        {!authMode && user && (
          <Dashboard 
            user={user}
            onLogout={handleLogout}
          />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;