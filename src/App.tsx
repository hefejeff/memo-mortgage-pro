import React from 'react';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Memo Mortgage Pro</h1>
      <p className="mt-4 text-lg">A mortgage management application.</p>
      <p className="mt-2">React, TypeScript, and Tailwind CSS are working!</p>
    </div>
  );
};

export default App;