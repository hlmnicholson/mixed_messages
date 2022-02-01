// storage arrays
const fruit = [ 'Strawberry', 'Banana', 'Raspberry', 'Lemon', 'Lime', 'Peach', 'Apricot'];
const milk = ['Coconut', 'Full fat Cow\'s milk', 'Almond', 'Hazelnut', 'Soya', 'Oat', 'Low fat Cow\'s Milk'];
const topping = ['Rainbow sprinkles', 'Chocolate sprinkles', 'Whipped cream', 'Marshmallows', 'Flake', 'Cherries', 'Maple syrup'];
const treat = ['Milk chocolate', 'White chocolate', 'Dark chocolate', 'Caramel', 'Cookie dough', 'Vanilla sugar', 'Candyfloss'];
const trick = ['Baked beans', 'Hot sauce', 'Marmite', 'Gravy', 'Gherkins', 'Fried onions', 'Wasabi'];

// function to randomly pick a number between 0 and the specified number (num)
const randomPick = (num) => Math.floor(Math.random() * num)

// function to decide if someone deserves a treat or something from the trick array
const trickOrTreat = () => {
  return ['trick', 'treat'][randomPick(2)]
}

// function to construct our randomMilkshake
const randomMilkshakeBuild = (fruit, milk, topping, treat, trick) => {
}


console.log(`${fruit[0]}, ${milk[0]}, ${treat[0]}, ${topping[0]}, ${trick[randomPick(trick.length)]}`);

console.log(trickOrTreat());
