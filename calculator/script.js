let firstVal = '';
let op= '';
let result = document.getElementById("result");
let prevresult = document.getElementById("prevresult");
let operator = document.getElementById("operator");
let digitadd = (a) => {
    result.textContent = result.textContent + a;
}

let operatorz = (symbol) => {
    if (firstVal === '') {
        firstVal = result.textContent;
        prevresult.textContent = firstVal;
        op = symbol;
        operator.textContent = symbol;
        result.textContent = '';
    } else {
        firstVal = eval(firstVal + op + result.textContent);
        prevresult.textContent = firstVal;
        op = symbol;
        operator.textContent = symbol;
        result.textContent = '';
    }
};

let clear = ()=>{
    result.textContent = '';
    prevresult.textContent = '';
    operator.textContent = '';
    firstVal = '';
    op = '';
}

let calculate= () =>{
    result.textContent = eval(firstVal + op + result.textContent);
    prevresult.textContent = '';
    firstVal ='';
    operator.textContent = '';
    op = '';
}