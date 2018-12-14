var win=0;
var loose=0;
var blue=Math.floor(Math.random() * 12) + 1;
var green=Math.floor(Math.random() * 12) + 1;
var red=Math.floor(Math.random() * 12) + 1;
var white=Math.floor(Math.random() * 12) + 1;
var rn=Math.floor(Math.random() * 102) + 19;
$("#random").text(rn);
var score=0;

//removed new "var" statements
function reset() {
    blue=Math.floor(Math.random() * 12) + 1;
    green=Math.floor(Math.random() * 12) + 1;
    red=Math.floor(Math.random() * 12) + 1;
    white=Math.floor(Math.random() * 12) + 1;
    rn=Math.floor(Math.random() * 102) + 19;
    $("#random").text(rn);
    score=0;
    $("#totalScore").text(score);
}  

function wins() {
    alert("You Win!");
    reset();
    win++;
    $("#win").text(win);
}

function losses() {
    alert("You Lost!!");
    loose++;
    $("#loose").text(loose);
    reset();
}


$("#crysBlue").click(function() {
    score = score + blue;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        losses();
    }
});

$("#crysRed").click(function() {
    score = score + red;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        losses();
    }
});

$("#crysGreen").click(function() {
    score = score + green;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        losses();
    }
});

$("#crysWhite").click(function() {
    score = score + white;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        losses();
    }
});



