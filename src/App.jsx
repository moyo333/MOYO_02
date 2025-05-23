 import React, { useState } from 'react';
import tacos from './Tacos';  
import TacoRecipe from './TacoRecipe';
import './index.css';

function App() {
  const [selectedTaco, setSelectedTaco] = useState(null);

  const handleChoice = (choice) => {
    const taco = tacos.find(t => t.name.toLowerCase().includes(choice));
    setSelectedTaco(taco);
  };

  return (
    <div className="app bg-yellow-50 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Taco Ingredience 🌮</h1>

      <div className="flex justify-center items-center min-h-screen space-x-4">
        <button
          onClick={() => handleChoice('chicken')}
           className="text-4xl px-8 py-5 bg-sky-400 hover:bg-red-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-110"
        >
          🍗
        </button>

        <button
          onClick={() => handleChoice('beef')}
          className="text-4xl px-8 py-5 bg-red-400 hover:bg-red-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-110"
        >
          🥩
        </button>

        <button
          onClick={() => handleChoice('fish')}
          className="text-4xl px-8 py-5 bg-blue-400 hover:bg-blue-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-110"
        >
          🐟
        </button>
      </div>

      <div id="recipeContainer" className="w-full max-w-md bg-white rounded-xl shadow-lg p-2">
        <TacoRecipe taco={selectedTaco} />
      </div>
    </div>
  );
}

export default App;
