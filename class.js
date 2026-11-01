class dog{
    D_Breed="Beagle"
    D_name="Poppu"
    D_age=2
}

let Dog=new dog()

console.log(Dog.D_Breed,Dog.D_name,Dog.D_age)

// Public Class: Class properties can be accessed from outside the class.
class Car{
    constructor(Brand,Model_Name,Year){
    this.Brand=Brand
    this.Model_Name=Model_Name
    this.Year=Year
    }
    displays(){
        return "Car Name: "+this.Brand+" Car Model: "+this.Model_Name +" Man.Year: "+this.Year
    }
}
let car=new Car("TATA","NEXON","2025");

console.log(car.displays())

// Private Class: The inner class methods can access the private properties.
class Bike{
    //When we ar changing the property as private (#). It will works inside that particular class
    #Brand 
    #Model_Name
    #Year
    constructor(Brand,Model_Name,Year){
        this.#Brand=Brand
        this.#Model_Name=Model_Name
        this.#Year=Year
    }

    get Brand(){    //This get method is used to access the private property in the call
        return "Bike Brand: "+ this.#Brand
    }
    set Brand(brand){
        this.#Brand=brand
    }
    get Model_Name(){
        return this.#Model_Name
    }

    set Model_Name(model_name){
        this.#Model_Name=model_name
    }
    get Year(){
        return this.#Year
    }
    set Year(year){
        this.#Year=year
    }

}

let bike=new Bike()
bike.Brand="TVS"
bike.Model_Name="Apache"
bike.Year=2022
console.log(bike.Brand, bike.Model_Name, bike.Year)