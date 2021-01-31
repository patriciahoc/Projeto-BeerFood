import React, { useEffect, useState } from 'react';
import './App.css';
import Beer from './componentes/Beer';
import Food from './componentes/Food';
import { IBeer } from './types/Beer';
import { FoodCategory } from './types/Categories';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const [beer, setBeer] = useState<IBeer[]>([]);
  const [foodCategories, setFoodCategories] = useState<FoodCategory[]>([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((resposta) => setFoodCategories(resposta.data.categories));
  }, []);

  function buscarBeer() {
    if (beer.length === 0) {
      axios
        .get(`https://api.punkapi.com/v2/beers/?per_page=8`)
        .then((resposta) => setBeer(resposta.data));
    } else {
      setBeer([]);
    }
  }

  return (
    <div className="App">
      <Food foodCategories={foodCategories} />

      <div className="food-beer-list food-shop">
        <h1>Tipos de Cerveja</h1>
        <button onClick={buscarBeer}>Buscar Cerveja</button>
        <Beer beer={beer} />
      </div>
    </div>
  );
}

export default App;
