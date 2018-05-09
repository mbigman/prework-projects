var prices = {
    "Brioche": 2.00,
    "Hawaiian": 1.50,
    "Protein": 1.00,
    "Beef": 4.00,
    "Bison": 5.00,
    "Veg": 3.50,
    "Lettuce": 0.25,
    "Tomato": 0.50,
    "Pickles": 0.25
}

let options = document.querySelectorAll('.item')
let buns = document.querySelectorAll('.bun')
// console.log(buns)
let meats = document.querySelectorAll('.meat')
let condiments = document.querySelectorAll('.condiments')
let button = document.querySelector('#the-button')
let results = document.querySelector('#results')

//Add listeners to every item
options.forEach(option => {
    option.addEventListener('click', e=> {
        option.classList.toggle('active')
    })
})

button.addEventListener('click', e => {
    // let total_buns = 0;
    // let total_meats = 0;
    // //Check to see if buns are selected
    // buns.forEach(bun => {
    //     if(item.classList.contains('active')){
    //         total_buns += 1
    //     }
    // })
    // if(total_buns=0){
    //     alert("You must pick a type of bun")
    // } 
    // if (total_buns>1)
    
    if (checkChoices(buns) && checkChoices(meats)){
        let total_cost = 0;
        options.forEach(item => {
            if(item.classList.contains('active')){
                console.log(item.id)
                total_cost += prices[item.id]   
            }
        })
        results.innerHTML = `<div id="results" class="item"> That will cost ${total_cost} dollars</div>` 
    }
})

function reset(){
    options.forEach(item => {
        item.classList.remove('active')
        
    })
}

function checkChoices(choices){
    let total = 0;
    let type = choices[0].classList[1]
    choices.forEach(c => {
        if(c.classList.contains('active')){
            total += 1
        }
    })
    if(total==0){
        alert("You must make a selection for your "+type)
        return false
    } else if (total>1){
        alert("You can only pick one "+type)
        return false
    } else {
        return true
    }
    
}