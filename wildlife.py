# Ancestral Stories:** In many African cultures, the art of storytelling is passed
#  down from generation to generation. Imagine you're creating an application that
#  records these oral stories and translates them into different languages. The
#  stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
#  objects, and how inheritance might come into play if there are different types of
#  stories or storytellers.



#  input 
#  storytelling
#  length
#  moral lessons
#  age group

#  output
#  model story
#  model storyTeller
#  model Translater
# record oral story
# translate story

#  process
#  create a  class 
#  with attributes

class Stories:
    def __init__(self,length,moral_lessons,age_group):
        self.length=length
        self.moral_lessons=moral_lessons
        self.age_group=age_group

    def record_story(self):
          return f"The {self.moral_lessons} from this story is cleary explained"
    

    def translate_story(self):  
       return f"{self.length} long story will be translated to three different languages." 


story1=Stories(moral_lessons='HardWork Pays')
print(story1.record_story)
print(story1.translate_story())





# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.

# input
# unique ingredients
# preparation time
# cooking method
# nutritional


# output
# handle recipes from different African countries



# process
# create class
# create subclasses e.g MoroccanRecipe ,EthiopianRecipe ,NigerianRecipe


class Recipe:
    def __init__(self,unique_ingredients,preparation_time,cooking_method,nutritional):
        self.unique_ingredients=unique_ingredients
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional=nutritional

    def get_recipe(self):
        return f"I need {self.preparation_time} to prepare this recipe" 

    def prepare_food(self): 
        return f"I use {self.cooking_method} to get preapare this food on time"  
    
recipe1=Recipe(preparation_time=30)
print(recipe1.get_recipe())
print(recipe1.prepare_food())

    





# **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to

# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.

# input
# diet
# typical lifespan
# migration
# patterns

# output
# track differnt species in a national park
# 

# process
# create a class model species,predator ,prey
# methods
# count species
# categorizeSpecies

class Wildlife:
    def __init__(self,diet,typical_lifespan,migration,patterns):
        self.diet=diet
        self.typical_lifespan=typical_lifespan
        self.migration=migration
        self.patterns=patterns

    def countSpecies(self):
        return f"{self.migration} Zebras move to other locations to look for food " 

    def categorizeSpecies(self) :
        return f"Animals with {self.patterns} have to be categorized together"
    

wildlife1=Wildlife(migration="Every Year") 
print(wildlife1.countSpecies()) 
print(wildlife1.categorizeSpecies())




# **African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages.

# input
# # music style
# # instruments

# output
# manage festival schedule
# stage arrangements


# process

# create a class festival
# with attributes and methods

class Festival:
    def __init__(self,music_style,instruments):
        self.music_style=music_style
        self.instruments=instruments

    def manage_festivals(self):
        return f"New {self.instruments} need to be bought"



    def stage_arrangements(self):
        return f"A day has to be scheduled for practising {self.music_style}"


festival1=Festival(music_style="Isukuti",instruments="drums")
print(festival1.music_style())


#     Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.

class Products:
           
        def __init__(self,name,price,quantity):
            self.name=name
            self.price=price
            self.quantity=quantity

        def calculate_products(self):
            return f""
            




#             Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.

class Student:

    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average_grade(self):
        total_grades = sum(self.grades)
        average_grade = total_grades / len(self.grades)
        return average_grade

    def display_student_information(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Grades:", self.grades)

    def has_passed(self):
        average_grade = self.calculate_average_grade()
        return average_grade >= 60

student1 = Student("John Doe", 18, [90, 80, 70])
student2 = Student("Jane Doe", 19, [80, 70, 60])

print("Student 1")
student1.display_student_information()
print("Average grade:", student1.calculate_average_grade())
print("Has passed:", student1.has_passed())

print("Student 2")
student2.display_student_information()
print("Average grade:", student2.calculate_average_grade())
print("Has passed:", student2.has_passed())
  
        