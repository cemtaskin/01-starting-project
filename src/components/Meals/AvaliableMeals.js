import classes from './AvaliableMeals.module.css';

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
    const mealList= DUMMNY_MEALS.map(meal =><li>{meal.name}</li>);
    return <section className={classes.meals}>
        <ul>{mealList}</ul>
    </section>;
};

export default AvailableMeals;
