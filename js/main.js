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
            // console.log(value)
            calculator.parseInput(value)
        }
    })

    const calculator = {
        displayText: '0',
        prevTotal: null,

        parseInput(value){
            // have any special buttons been clicked
            switch(value){
                case '=' :
                    this.calcAnswer(this.displayText)
                    // calculate answer
                    break;
                case 'AC':
                    // clear screen
                    this.clearAll()
                    break;
                case '.':
                    if(this.displayText == 0){
                        this.addText('0.')
                    // pass '0.' into add text method
                        }else{
                    // add value to text string
                        this.addText(value)
                    }
                    break;
                default:
                // add value to text string
                this.addText(value)
                break;
            }
            
        },
        addText(value){
            if(this.displayText === '0'){
                this.displayText = ''
            }else if(this.prevTotal !== null){
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if(isNaN(+(value)) && isNaN(+(this.displayText))){
                    /*check whether the last char in display AND the entered value are not numbers*/
                if(isNaN(this.displayText.slice(-1))){
                    return;
                }
            
            }
            this.displayText += value
            this.outputText(this.displayText)
            // output display text to screen
        },

        outputText(text){
            document.querySelector('.calculator-screen').value = text
        },

        calcAnswer(equation){
            let result = Function('return ' + equation)()
            this.outputText(result)
        },

        clearAll(){
            this.displayText = '0',
            this.prevTotal = null,
            this.outputText(this.displayText)
        }
    }