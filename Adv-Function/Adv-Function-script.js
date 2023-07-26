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