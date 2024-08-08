// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
   cats.push("Ralph")
}
destructivelyAppendCat(cats)

function beforeEach(){
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield")
}
beforeEach()

function destructivelyPrependCat(name){
    cats.unshift("Bob")

}
destructivelyPrependCat()

beforeEach()

function destructivelyRemoveLastCat(){
    cats.pop()
}

destructivelyRemoveLastCat()

beforeEach()

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()

beforeEach()


function appendCat(name){
    return [...cats, "Broom"]
}
appendCat()

beforeEach()

function prependCat(){
    return ["Arnold", ...cats]
}
prependCat()

beforeEach() 

function removeLastCat(){
    return cats.slice(0,-1)
}

removeLastCat()

beforeEach() 

function removeFirstCat(){
    return cats.slice(1)
}
removeFirstCat()

beforeEach() 