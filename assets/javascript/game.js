
var win=0;
var loose=0;
var blue=Math.floor(Math.random() * 12) + 1; console.log
var green=Math.floor(Math.random() * 12) + 1;
var red=Math.floor(Math.random() * 12) + 1;
var white=Math.floor(Math.random() * 12) + 1;
var rn=Math.floor(Math.random() * 102) + 19;
var score=0;

function reset() {
    var blue=Math.floor(Math.random() * 12) + 1;
    var green=Math.floor(Math.random() * 12) + 1;
    var red=Math.floor(Math.random() * 12) + 1;
    var white=Math.floor(Math.random() * 12) + 1;
    var rn=Math.floor(Math.random() * 102) + 19;
    $("#random").text(rn);
    var score=0;
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
    reset();
    loose++;
    $("#loose").text(loose);
}


$("#crysBlue").click(function() {
    totalScore = totalScore + blue;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        looses();
    }
});

$("#crysRed").click(function() {
    totalScore = totalScore + blue;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        looses();
    }
});

$("#crysGreen").click(function() {
    totalScore = totalScore + blue;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        looses();
    }
});

$("#crysWhite").click(function() {
    totalScore = totalScore + blue;
    $("#totalScore").text(score);
    if (score===rn) {
        wins();
    }
    else if (score>rn) {
        looses();
    }
});

