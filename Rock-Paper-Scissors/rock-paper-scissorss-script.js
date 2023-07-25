function generateSign(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    return computerMove;

}


function result(userMove){
    let computerMove = generateSign();
    if(userMove === 'Scissors'){
        if(computerMove === 'Rock' ){
            alert('Computer Won!!!');
        }
        else if (computerMove === userMove){
            alert('It is a Draw');
        }
        else if (computerMove === 'Paper'){
            alert('You Won!');
        }
    }   
    else if(userMove === 'Paper'){
        if(computerMove === 'Scissors' ){
            alert('Computer Won!!!');
        }
        else if (computerMove === userMove){
            alert('It is a Draw');
        }
        else if (computerMove === 'Rock'){
            alert('You Won!');
        }
    }
    else{
        if(computerMove === 'Rock' ){
            alert('Computer Won!!!');
        }
        else if (computerMove === userMove){
            alert('It is a Draw');
        }
        else if (computerMove === 'Scissor'){
            alert('You Won!');
        }
    }
}