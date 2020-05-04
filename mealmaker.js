const menu = 
{
  _courses:
  {
    appetizers: [],
    mains: [],
    desserts:[],
  },
  get appetizers()
    {
      return this._courses.appetizers;
    },
    set appetizers(appetizer)
    {
      this._courses.appetizers = appetizer;
    },
    get mains()
    {
      return this._courses.mains;
    },
    set mains(main)
    {
      this._courses.mains = main;
    },
    get desserts()
    {
      return this._courses.desserts;
    },
    set desserts(dessert)
    {
      this._courses.desserts = dessert;
    },
  get courses()
  {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
      }
  },
  addDishToCourse(courseName,dishName,dishPrice)
  {
     const dish =
     {
        name: dishName,
        price: dishPrice
     };
     this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName)
  {
     const dishes = this._courses[courseName];
     const random = Math.floor(Math.random() * dishes.length);
     return dishes[random];
  },
  generateRandomMeal()
  {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const total = appetizer.price + main.price + dessert.price;
    return `Your menu: ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is ${total}.`;
  }
};
menu.addDishToCourse('appetizers','paneer',120);
menu.addDishToCourse('mains','roti',10);
menu.addDishToCourse('desserts','rasgulla',100);

menu.addDishToCourse('appetizers','dal',100);
menu.addDishToCourse('mains','chawal',60);
menu.addDishToCourse('desserts','barfi',40);

menu.addDishToCourse('appetizers','schezwan rice',150);
menu.addDishToCourse('mains','chutni',10);
menu.addDishToCourse('desserts','ice cream',50);

const meal = menu.generateRandomMeal();
console.log(meal);