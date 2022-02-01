// storage arrays
const fruit = [ 'Strawberry', 'Banana', 'Raspberry', 'Lemon', 'Lime', 'Peach', 'Apricot'];
const milk = ['Coconut', 'Full fat Cow\'s milk', 'Almond', 'Hazelnut', 'Soya', 'Oat', 'Low fat Cow\'s Milk'];
const sweetner = ['Milk chocolate', 'White chocolate', 'Dark chocolate', 'Caramel', 'Cookie dough', 'Vanilla sugar', 'Candyfloss'];
const treat = ['Rainbow sprinkles', 'Chocolate sprinkles', 'Whipped cream', 'Marshmallows', 'Flake', 'Cherries', 'Maple syrup'];
const trick = ['Baked beans', 'Hot sauce', 'Marmite', 'Gravy', 'Gherkins', 'Fried onions', 'Wasabi'];

// function to randomly pick a number between 0 and the specified number (num)
const randomPick = (num) => Math.floor(Math.random() * num)

// function to decide if someone deserves a treat or something from the trick array
const trickOrTreat = () => {
  //const choice = [treat[randomPick(treat.length)], trick[randomPick(trick.length)]][randomPick(2)]
  const choice = ['trick', 'treat'][randomPick(2)]
  return choice === 'trick' ? `but you've been bad so you get ${trick[randomPick(trick.length)]} on top`
                            : `and you've neen good so you get ${treat[randomPick(treat.length)]} on top`; 
}

// function to construct our randomMilkshake and print to console
const randomMilkshakeBuild = (fruit, milk, sweetner, treat, trick) => {
  return ``
}

console.log(trickOrTreat());
