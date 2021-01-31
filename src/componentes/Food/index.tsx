import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FoodsTypes, Food } from '../../types/Categories';

function Foods(props: FoodsTypes) {
  const [categorySelected, setCategorySelected] = useState('');
  const [foods, setFoods] = useState<Food[]>([]);
  const [query, setQuery] = useState('');
  const { foodCategories } = props;
  const API = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    if (categorySelected === '') {
      setFoods([]);

      return;
    }

    axios
      .get(`${API}filter.php?c=${categorySelected}`)
      .then((resposta) => setFoods(resposta.data.meals || []));
  }, [categorySelected]);

  useEffect(() => {
    if (query === '') {
      setFoods([]);

      return;
    }

    axios
      .get(`${API}search.php?s=${query}`)
      .then((resposta) => setFoods(resposta.data.meals || []));
  }, [query]);

  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Digite a comida..."
        />
      </p>

      <ul>
        {foodCategories.map(({ idCategory, strCategory }) => (
          <li key={idCategory} onClick={() => setCategorySelected(strCategory)}>
            {strCategory}
          </li>
        ))}
      </ul>
      <h2>
        Tipo selecionado: <strong>{categorySelected}</strong>
      </h2>

      <div className="food-container">
        {foods.map(({ idMeal, strMeal, strMealThumb }) => (
          <div key={idMeal} className="food-item">
            <img src={strMealThumb} alt="foto" />
            <p>{strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
