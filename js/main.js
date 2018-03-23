window.onload = build;
var computers;
var offices = 9;
var timer;
var showComputer;
var score = 0;
var noMultiClick = true;
var html = "";

function build(){
    for(var x =0; x<offices; x++){
        html += "<div class='office'><div class='desk'></div><div class='computer'></div></div>";
    }
    document.querySelector('.gameboard').innerHTML+=html;
    computers = document.querySelectorAll('.computer');
    for(var x = 0; x<computers.length;x++){
        computers[x].addEventListener('click', hitComputer, false);
    }
}

function popup(){
    noMultiClick = true;
    showComputer = computers[Math.floor(Math.random()*computers.length)];
    showComputer.classList.add('popup');
    var randomtime = (Math.floor(Math.random()*10)*100)+400;
    timer = setTimeout(hidecomputer, randomtime);
}

function hidecomputer(){
    showComputer.classList.remove('popup');
    popup();
}

function hitComputer(){
    event.target.classList.remove('popup');
    if(noMultiClick){
        noMultiClick = false;
        score++;
        document.querySelector('.score').innerHTML = score;
    }
    popup();
}

function start(){
    popup();
}

document.getElementById('startGame').addEventListener('click', start);