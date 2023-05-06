// required abilities of a calculator
// accept user input - number, operator, number
// store and recognize input including decimals, negative numbers
// recognize input and perform calculations
//  return result

// optional features:
// should accept longer operations
// display all input as it is being entered
// store pervious value as start of next operation
// clear button should clear all entries
// should prevent invalid inputs (double operators, double decimals)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event =>{
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
            return;
        }else{
            // pass to parse method
            // console.log(`thing is ${event}`)
            console.log(event)
        }
    })