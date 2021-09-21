const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const start = document.querySelector('.start');

var clickedArr = [];
var btnsArr = [btn1, btn4];


let startGame = function(){
    document.getElementById('heading').innerHTML = "Simon game";
    var i = 0;
    console.log(btnsArr, i);
    start.addEventListener('click', function(e){
        cycleThrough(btnsArr, i);
    });
}

document.querySelector('.start').addEventListener('click', function(){
    startGame();
})

let cycleThrough = function(btnsArr, i){
    if(i < btnsArr.length){
        
        if(btnsArr[i].classList.contains('red')){
            btnsArr[i].classList.add('highlight-red');
            setTimeout(() => {
                btnsArr[i].classList.remove('highlight-red');
                i++;
            }, 350);
        }else if(btnsArr[i].classList.contains('green')){
            btnsArr[i].classList.add('highlight-green');
            setTimeout(() => {
                btnsArr[i].classList.remove('highlight-green');
                i++;
            }, 350);
        }else if(btnsArr[i].classList.contains('blue')){
            btnsArr[i].classList.add('highlight-blue');
            setTimeout(() => {
                btnsArr[i].classList.remove('highlight-blue');
                i++;
            }, 350);
        }else{
            btnsArr[i].classList.add('highlight-yellow');
            setTimeout(() => {
                btnsArr[i].classList.remove('highlight-yellow');
                i++;
            }, 350);
        }
        setTimeout(() => {
            cycleThrough(btnsArr, i);
        }, 700);
    }else{
        console.log('accept');
        acceptClicks(btnsArr);
    }
}

let acceptClicks = function(btnsArr){

        document.getElementById("heading").innerHTML = "Your turn";
        btn1.addEventListener('click', onClickSelect);
        btn2.addEventListener('click', onClickSelect);
        btn3.addEventListener('click', onClickSelect);
        btn4.addEventListener('click', onClickSelect);
}

document.getElementById('check').addEventListener('click', function(){
    tally(btnsArr, clickedArr);
})

let onClickSelect = function(e){
    if(e.target.classList.contains('red')){
        e.target.classList.add('highlight-red');
    setTimeout(function(){
        e.target.classList.remove('highlight-red');
    }, 200);
    }
    else if(e.target.classList.contains('green')){
        e.target.classList.add('highlight-green');
    setTimeout(function(){
        e.target.classList.remove('highlight-green');
    }, 200);
    }
    else if(e.target.classList.contains('blue')){
        e.target.classList.add('highlight-blue');
    setTimeout(function(){
        e.target.classList.remove('highlight-blue');
    }, 200);
    }else{
        e.target.classList.add('highlight-yellow');
    setTimeout(function(){
        e.target.classList.remove('highlight-yellow');
    }, 200);
    }

    console.log(e.target.id);
    clickedArr.push(e.target.id);
    console.log(clickedArr);
}

let tally = function(btnsArr, clickedArr){
    let btnsArrIds = btnsArr.map((btn) => {
        return btn.id;
    })

    if(clickedArr.toString() === btnsArrIds.toString()){
        document.querySelector('.score').innerHTML = 'Score: '+clickedArr.length;
        again(btnsArr);
    }else {
        document.querySelector('.score').innerHTML = 'Score: '+0;
        lost();
    };
}

let again = function (btnsArr){
    document.getElementById('heading').innerHTML = "Simon game";
    clickedArr = [];
    let newElement = document.querySelector('.btn'+Math.ceil(Math.random() * 4));
    btnsArr.push(newElement);
    i = 0;
    cycleThrough(btnsArr, i);
}

let lost = function(){
    document.getElementById('heading').innerHTML = "Sorry, you lost";
    btnsArr = [btn1, btn4];
    clickedArr = [];
    i = 0;
}


