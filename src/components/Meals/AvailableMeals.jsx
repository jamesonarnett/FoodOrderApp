import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Barbecue Burger",
    description: "Cause fuck ketchup...'Merica.",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "We aren't sure what it is either.",
    price: 9.5,
  },
  {
    id: "m3",
    name: "Sushi",
    description: "Guaranteed at least 50% fish, or we deliver faster.",
    price: 17.99,
  },
  {
    id: "m4",
    name: "Mostly still Green Bowl",
    description:
      "We fuck with living healthy, and making things overly-expensive.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
