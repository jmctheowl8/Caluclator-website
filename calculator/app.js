// section:setting Dom 
const numbers = document.getElementsByClassName('[numbers]')
const previousShowcase = document.getElementById("cur")
const currentShowcase = document.getElementById("prev")
const operateror = document.getElementsByClassName('[operator]')
const Specialcases = document.getElementsByClassName('[special]')
let previous = 0;
let current = 0


//having numbers appear basicly you just adding it to the end  new numbers that is
// when sighn is clicked store what evg4waer is in the dom to a varable 1






// when enter is clicked store whats in the dom to second varable 2 

// delet returns takes off one of the nums that were in the dom so if 1000 it becomes 100

// clear just emptys sighn and  varables  dom appears like it was orginally 

//Next part calcutions taking the numbers that are valued applying the opertor to only to values at a time
// call calculatior class and just plug in values when all three values are found the two numbers and one sighn

// you want a function that says if sighn is this call calculator with the teo parmaters
class calculator{
    constructor(previous,current){
        this.previous = previous;
        this.current = current;
    }
    operateror(sighn){
        if(sighn == '+'){
            this.sum()
        }
        else if(sighn == '-'){
            subtract();
        }
        else if(sighn == '/' ){
            divide();
        }
        else (sighn == '*' ){
            mutpliy()
        }
        
    }
    sum(previous,current){
        return previous + current;
    }
    subtract(previous,current){
        return previous - current   
    }
    divide(previous,current){
        return previous / current
    }
    mutpliy(){
       return previous * current
    }
    getNum(){
        for(i=0;i<numbers.length;i++){
            numbers.addEvent;i    
        }
    }
    // add setter methods and getter 

}
// when enter is clicked perform calcultions
