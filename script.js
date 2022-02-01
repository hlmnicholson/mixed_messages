// storage arrays
const fruit = [ 'strawberry', 'banana', 'raspberry', 'lemon', 'lime', 'peach', 'apricot'];
const sweetner = ['milk chocolate', 'white chocolate', 'dark chocolate', 'caramel', 'cookie dough', 'vanilla sugar', 'candyfloss'];
const milk = ['coconut milk', 'full fat cow\'s milk', 'almond milk', 'hazelnut milk', 'soya milk', 'oat milk', 'low fat cow\'s milk'];
const treat = ['rainbow sprinkles', 'chocolate sprinkles', 'whipped cream', 'marshmallows', 'chocolate flakes', 'cherries', 'maple syrup'];
const trick = ['baked beans', 'hot sauce', 'marmite', 'gravy', 'gherkins', 'fried onions', 'wasabi'];

// function to randomly pick a number between 0 and the specified number (num)
const randomPick = (num) => Math.floor(Math.random() * num)

// function to decide if someone deserves a treat or something from the trick array
const trickOrTreat = () => {
  const choice = ['trick', 'treat'][randomPick(2)]
  return choice === 'trick' ? `but you've been bad so ${trick[randomPick(trick.length)]} on top, yuck! Or is it unique and complex?`
                            : `and you've been good so ${treat[randomPick(treat.length)]} on top, yummy!`; 
}

// function to construct our randomMilkshake and print to console
const randomMilkshakeBuild = (fruit, sweetner, milk) => {
  const flav1 = fruit[randomPick(fruit.length)];
  const flav2 = sweetner[randomPick(sweetner.length)];
  const flav3 = milk[randomPick(milk.length)];
  
  console.log(`Your milkshake for today is: ${flav1}, ${flav2}, ${flav3}, ${trickOrTreat()}`)
}

randomMilkshakeBuild(fruit, sweetner, milk);
