import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "Sweet, Sour, Salty, Bitter and Savory",
    price: 1200,
  },
  {
    id: "m2",
    name: "Sandwich",
    description: " vegetables, sliced cheese or meat, placed",
    price: 450,
  },
  {
    id: "m3",
    name: "Burger",
    description: "sweet, sour, salt – with a bit of crunch",
    price: 450,
  },
  {
    id: "m4",
    name: "Shawarma",
    description: " garlic, turmeric, cinnamon, and cardamom.",
    price: 300,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      id={meals.id}
      key={meals.id}
      name={meals.name}
      price={meals.price}
      discription={meals.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
