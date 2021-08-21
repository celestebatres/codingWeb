//Ambos: JavaScript y jQuery

let topLeft = 10, topRight = 10, bottomLeft = 100, bottomRight = 10, code;

function updateTopLeftInput(val) {
    topLeft = val;
    document.getElementById('topLeftShow').value = "border-top-left-radius: " + val + "%;"; 
    code = "border-radius: " + topLeft + "% " + topRight + "% " + bottomRight + "% " + bottomLeft + "%;";
    document.getElementById('code').value = code;
}

function updateTopRightInput(val) {
    topRight = val;
    document.getElementById('topRightShow').value = "border-top-right-radius: " + val + "%;"; 
    code = "border-radius: " + topLeft + "% " + topRight + "% " + bottomRight + "% " + bottomLeft + "%;";
    document.getElementById('code').value = code;
}

function updateBottomLeftInput(val) {
    bottomLeft = val;
    document.getElementById('bottomLeftShow').value = "border-bottom-left-radius: " + val + "%;"; 
    code = "border-radius: " + topLeft + "% " + topRight + "% " + bottomRight + "% " + bottomLeft + "%;";
    document.getElementById('code').value = code;
}

function updateBottomRightInput(val) {
    bottomRight = val;
    document.getElementById('bottomRightShow').value = "border-bottom-right-radius: " + val + "%;"; 
    code = "border-radius: " + topLeft + "% " + topRight + "% " + bottomRight + "% " + bottomLeft + "%;";
    document.getElementById('code').value = code;
}

$(function(){
    $("#topLeftInput").click(function (){
        $(".cuadro").css("border-top-left-radius", ""+topLeft+"%");
    });

    $("#topRightInput").click(function (){
        $(".cuadro").css("border-top-right-radius", ""+topRight+"%");
    });

    $("#bottomRightInput").click(function (){
        $(".cuadro").css("border-bottom-right-radius", ""+bottomRight+"%");
    });

    $("#bottomLeftInput").click(function (){
        $(".cuadro").css("border-bottom-left-radius", ""+bottomLeft+"%");
    });
});
