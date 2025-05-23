 import React from 'react';

const TacoRecipe = ({ taco }) => {
  if (!taco) {
    return (
       <h2 className="text-xl font-semibold text-blue-800 mt-4 text-center">
  Pick your favourite taco ingredient 👆
</h2>

    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-orange-600 mb-2">{taco.name}</h2>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Ingredients:</h3>
      <ul className="space-y-2 list-disc list-inside text-gray-800">
        <li>
           <span className="font-medium text-3xl block text-center">Protein:</span>
 {taco.ingredients.protein.name}, {taco.ingredients.protein.preparation}
        </li>
        <li>
          <span className="font-medium">Salsa:</span> {taco.ingredients.salsa.name}
        </li>
        {taco.ingredients.toppings.map((topping, index) => (
          <li key={index}>
            <span className="font-medium">{topping.name}</span> ({topping.quantity}): {topping.ingredients.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TacoRecipe;
