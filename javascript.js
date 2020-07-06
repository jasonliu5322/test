'use strict';

alert('Thanks for reading my stories, please answer four quesions at the end.');
var credit = 0;
function visitedPlace() {
    var place = prompt('Where did us visited during my first propeller fly?');
    var newplace = place.toLowerCase();
    if(place === null){
        return;
    }
    while (newplace !== 'downtown sf') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        place = prompt('Where did us visited during my first propeller fly?');
        newplace = place.toLowerCase();
        if(place === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function staceyAge() {
    var age = prompt('How old is Stacey now?');
    if(age === null){
        return;
    }
    while (age !== '2') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        age = prompt('How old is Stacey now?');
        if(age === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function Jelissa() {
    var specialty= prompt('What is Jelissa good at?');
    var newSpecialty = specialty.toLowerCase();
    if(specialty === null){
        return;
    }
    while (newSpecialty !== 'drawing') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        specialty= prompt('What is Jelissa good at?');
        newSpecialty = specialty.toLowerCase();
        if(specialty === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function ageComparison() {
    var age= prompt('When Jelissa is 25 years old, how old is Stacy?');
    if(age === null){
        return;
    }
    while (age !== '18') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        age= prompt('When Jelissa is 25 years old, how old is Stacy?');
        if(age === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function displayScore(){
    var userName = prompt('What is your name?');
    if(userName === null){
        return;
    }
    alert('Hi ' + userName +','+ ' congratulaitons to you! You got ' + credit + ' credits.');
    credit = 0;
}

function guessNumber(){
    alert('This is a guessing number game, please input a number which you think is my favorite number between 1 to 10. You only have four times to guess.');
    var round = 0;
    do{
        var myNumber = prompt('Input a number or click cancel to quit!.');
        if(myNumber === null)
            return;
        if(myNumber < 7){
            alert('Your number is too low.');
        }
        else if(myNumber > 7){
            alert('Your number is too high.');
        }
        else{
            alert('congratulaitons! You got the my favorite number which is 7!');
            return;
        }
        round++;
    }while(round < 4);
    alert('You have already guessed four times, my favorite number is 7!');
}

function guessFruit(){
    alert('Please guess my favorite fruits, there are multiple possible correct answers. You only have three times to guess.');
    var round = 0;
    var msg = '';
    var el = document.getElementById('myFruit');
    var myFruit = ['banana', 'blueberry'];
    while(round < 3){
        var fruitName = prompt('Input name of fruit or click cancle to quit.');
        if(fruitName === null)
            return;
        fruitName = fruitName.toLowerCase();
        for(var i = 0; i < myFruit.length; i++){
            if(fruitName === myFruit[i]){
                alert('Congratulations! You got the correct fruit name!');
                for(i = 0; i < myFruit.length; i++){
                    msg += myFruit[i] + ' ' ;
                }
                msg = 'My favorite fruits are: ' + msg;
                el.innerHTML = msg;
                return;
            }
        }
        alert('Your answer is wrong.');
        round++;
    }
    alert('You have already guessed three times, you are failed.');
    for(i = 0; i < myFruit.length; i++){
        msg += myFruit[i] + ' ' ;
    }
    msg = 'My favorite fruits are: ' + msg;
    el.innerHTML = msg;
}


