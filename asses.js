// 1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.


// input 
// storytelling
// length
// moral lessons
// age group

// output
// model story
// model storyTeller
// model Translater
// record oral story
//  translate story

// process
// create a  class 
// with attributes


class StoryTelling{
constructor(){
    this.length=length
    this.moralLessons=this.moralLessons
    this.ageGroup=this.ageGroup
}
recordOralStory(){
    if('moral lesson is well explained'){

    return "The moral lesson from this story is cleary explained"
}
else{
    return " Moral lesson not well explained"
}
}

}

console.log(recordOralStory());





// African Cuisine:** You're creating a recipe app specifically for African cuisine.
//  The app needs to handle recipes from different African countries, each with its
//  unique ingredients, preparation time, cooking method, and nutritional
//  information. Consider creating a `Recipe` class, and think about how you might
//  create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
//  `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
//  methods.

//  input
// unique ingredients
//  preparation time
//  cooking method
//  nutritional


//  output
//  handle recipes from different African countries



//  process
//  create class
//  create subclasses e.g MoroccanRecipe ,EthiopianRecipe ,NigerianRecipe

class Recipe{
    constructor(){
        this.uniqueIngedients=this.uniqueIngedients
        this.preparationTime=this.preparationTime
        this.cookingMethod=this.cookingMethod
        this.nutritional=this.nutritional
    }
    getRecipe(){
        if(this.preparationTime < 30 ){
            return "I need to prepare this recipe" 

        }
        else{
            return "It takes alot of time to prepare"
        }
        

    }
}

console.log(getRecipe());



// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

// input
//  diet
// typical lifespan
//  migration
//  patterns

//  output
//  track differnt species in a national park


//  process
//  create a class model species,predator ,prey
//  methods
//  count species
//  categorizeSpecies


class Wildlife{
    constructor(){
        this.diet=this.diet
        this.typicalLifespan=this.typicalLifespan
        this.migration=this.migration
        this.patterns=this.patterns
    }
    countSpecies(){
    return "Zebras move different locations every year to look for food"
    
}
categorizeSpecies(){
    if("Animals have patterns"){
        return "Animals belong to the same category"
    }
    else{
        return "Aninmals belong to different category"
    }
}
}
 console.log(countSpecies())
 console.log(categorizeSpecies());





//  **African Music Festival:** You're in charge of organizing a Pan-African music
//  festival. Many artists from different countries, each with their own musical style
//  and instruments, are scheduled to perform. You need to write a program to
//  manage the festival lineup, schedule, and stage arrangements. Think about how
//  you might model the `Artist`, `Performance`, and `Stage` classes, and consider
//  how you might use inheritance if there are different types of performances or
//  stages.



//  input
//  music style
// instruments

//  output
//  manage festival schedule
// stage arrangements


//  process

//  create a class festival
//  with attributes and methods

class Festival{
    constructor(){
        this.musicStyle=this.musicStyle
        this.intruments=this.intruments
    }
    manageFestivals(){
return "New instuments need to be bought"
    }
    stageArrangements(){
        return "SChedule a day to practise this music style"
    }
}
console.log(manageFestivals());
console.log(stageArrangements());

