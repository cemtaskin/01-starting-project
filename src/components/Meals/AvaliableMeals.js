import Card from '../UI/Card';
import classes from './AvaliableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMNY_MEALS = [

    {
        id:'m1',
        name:'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id:'m2',
        name:'Schnitzel',
        description: 'A german speciality',
        price: 22.99
    },
    {
        id:'m3',
        name:'Barbecue Burger',
        description: 'American, raw, mearty',
        price: 22.99
    },
    {
        id:'m4',
        name:'Fresh Salat',
        description: 'Healty.... and green...',
        price: 22.99
    },



];
const AvailableMeals = () =>{
    const mealList= DUMMNY_MEALS.map(meal =><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>);
    return <section className={classes.meals}>
        <Card>
            <ul>{mealList}</ul>
        </Card>
    </section>;
};

export default AvailableMeals;
