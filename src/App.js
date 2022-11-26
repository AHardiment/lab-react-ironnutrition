import './App.css';
import { useState } from 'react';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const displayFoods = () => {
    return foodList.map((food) => {
      return (
        <div className="food-map">
          <h2>{food.name}</h2>
          <img src={food.image} width={'200px'} alt={food.name} />
        </div>
      );
    });
  };

  const deleteFoodBoxByItsName = (name) => {
    console.log(name);
    const newFoodList = foodList.filter((food) => food.name !== name);
    setFoodList(newFoodList);
  };

  const displayFoodBoxes = () => {
    return foodList.map((food) => {
      return <FoodBox onDelete={deleteFoodBoxByItsName} food={food} />;
    });
  };

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const searchFoodAndRepopulateFoodList = (searchTerm) => {
    const filteredFoodList = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFoodList(filteredFoodList);
  };

  return (
    <div className="App">
      <div className="food-boxes">{displayFoodBoxes()}</div>
      <div className="add-food-form">
        <AddFoodForm onAddFood={addFood} />
      </div>
      <div>
        <Search onSearch={searchFoodAndRepopulateFoodList} />
      </div>
      <div className="food-list">
        <hr />
        <h1>Food List</h1>
        <hr />
      </div>
      <div className="foods">{displayFoods()}</div>
    </div>
  );
}

export default App;
