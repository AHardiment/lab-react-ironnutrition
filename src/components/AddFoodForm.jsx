import React from 'react';
import Input from 'antd/lib/input';
import { useState } from 'react';

const AddFoodForm = (props) => {
  const [food, setFood] = useState({
    name: '',
    calories: '',
    image: '',
    servings: 0,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setFood({
      ...food,
      [event.target.name]: value,
      [event.target.calories]: value,
      [event.target.image]: value,
      [event.target.servings]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddFood(food);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={food.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="calories"
          placeholder="Calories"
          value={food.calories}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Image"
          value={food.image}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="servings"
          placeholder="Servings"
          value={food.servings}
          onChange={handleChange}
        />
        <button>Add Food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
