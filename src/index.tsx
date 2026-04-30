import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

const App = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold">Memo Mortgage Pro</h1>
    <p className="mt-4 text-lg">Your mortgage management application.</p>
    <p className="mt-2">React, TypeScript, and Tailwind CSS are working!</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);