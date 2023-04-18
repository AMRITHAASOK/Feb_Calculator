//1 display number in text box
function displayNumber(num){
    result.value += num
}

//2 clear text box
function clearText(){
   result.value ="" 
}
//3 evaluate expression

function evaluateExp(){
    //method 1
    // exp=result.value//7*3
    // output=eval(exp)//21
    // result.value=output

    //method2
    result.value = eval(result.value)
}

//4 Remove last item from text box

function removeLastItem(){
    currentExp=result.value
    result.value=currentExp.slice(0,-1)
}