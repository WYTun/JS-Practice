function greeting(){
    console.log('hello');
}

const func1 = function(){
    console.log('hello2');
};

const arrowFunction = () => {
    console.log('hello')
};
arrowFunction();

const oneParam = param => console.log(param + 1);

oneParam(2);

const buttonElement = document.querySelector('.js-button');
const eventListener = () => {
    console.log('Clicked');
};
buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click',eventListener )

buttonElement.addEventListener('click', () => {
    console.log('Clicked2');
});

const array1 = [1, 3, -5, 9];
console.log(array1.filter((value,index) => {
    if(value >= 0){
        return true;
    }
    else{
        return false;
    }
}));

array1.map((value, index) =>{
    return 10;
})