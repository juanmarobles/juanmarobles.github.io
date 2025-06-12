
    import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import PortfolioPage from '@/pages/PortfolioPage';

    function App() {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-sky-800 text-white">
          <PortfolioPage />
          <Toaster />
        </div>
      );
    }

    export default App;
  