import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AlertBedge, Search, Home } from '@_assets/icon';


import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-green900">
        TailwindCSS 테스트&svg test
      </h1>
    <Search  width={60} height={60} />
    </div>
  );
}

export default App

