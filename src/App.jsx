import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import GameShell from '@/components/game/GameShell';
import Home from '@/pages/Home';
import HowToPlay from '@/pages/HowToPlay';
import CharacterSelect from '@/pages/CharacterSelect';
import Simulation from '@/pages/Simulation';
import Results from '@/pages/Results';
import OtherSide from '@/pages/OtherSide';
import Timeline from '@/pages/Timeline';
import Glossary from '@/pages/Glossary';
import Quiz from '@/pages/Quiz';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<GameShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/characters" element={<CharacterSelect />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/results" element={<Results />} />
        <Route path="/other-side" element={<OtherSide />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App