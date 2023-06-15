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




//     Create a class called Product with attributes for name, price, and quantity.
//  Implement a method to calculate the total value of the product (price * quantity).
//  Create multiple objects of the Product class and calculate their total values.

class Product{
    constructor(){
this.name=name
this.price=price
this.quantity=this.quantity
    }
    calculateTotalValue(){

    }
}



    //         Implement a class called Student with attributes for name, age, and grades (a
    //  list of integers). Include methods to calculate the average grade, display the
    //  student information, and determine if the student has passed (average grade >=
    // 60). Create objects for the Student class and demonstrate the usage of these
    //  methods.
    
    class Student {

        constructor(name, age, grades) {
            this.name = name;
            this.age = age;
            this.grades = grades;
        }
    
        calculateAverageGrade() {
            const totalGrades = this.grades.reduce((a, b) => a + b);
            const averageGrade = totalGrades / this.grades.length;
            return averageGrade;
        }
    
        displayStudentInformation() {
            console.log(`Name: ${this.name}`);
            console.log(`Age: ${this.age}`);
            console.log(`Grades: ${this.grades}`);
        }
    
        hasPassed() {
            const averageGrade = this.calculateAverageGrade();
            return averageGrade >= 60;
        }
    }
    
    const student1 = new Student("John Doe", 18, [90, 80, 70]);
    const student2 = new Student("Jane Doe", 19, [80, 70, 60]);
    
   
    console.log("Student 1");
    student1.displayStudentInformation();
    console.log("Average grade:", student1.calculateAverageGrade());
    console.log("Has passed:", student1.hasPassed());
    
    console.log("Student 2");
    student2.displayStudentInformation();
    console.log("Average grade:", student2.calculateAverageGrade());
    console.log("Has passed:", student2.hasPassed());