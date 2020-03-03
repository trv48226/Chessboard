var table = document.getElementsByClassName("square");

var flip = false;

function buttonFlip(){
    for(i = 0; i < table.length; i++){
        if(i % 8 == 0){
            flip = !flip;
        }
        if(flip == true){
            if(i % 2 == 0){
                table[i].style.backgroundColor = "black";
             }else{
                table[i].style.backgroundColor = "white";
             }
        }else{
            if(i % 2 == 0){
                 table[i].style.backgroundColor = "white";
            }else{
                 table[i].style.backgroundColor = "black";
            }
        }
    }
    flip = !flip;
}

function myAjax(){
let color1 = document.getElementsByClassName("even")[0].style.backgroundColor;
let color2 = document.getElementsByClassName("odd")[0].style.backgroundColor;
$.ajax({
    url : "/flip",
    type: "POST",
    data: JSON.stringify({
        'color1': color1,
        'color2': color2
    }),
    contentType: 'application/json;charset=UTF-8',
    success: function(response)
    {
        console.log(response)
        for(i = 0; i < table.length/2; i++){
            document.getElementsByClassName("even")[i].style.backgroundColor = color2;
            document.getElementsByClassName("odd")[i].style.backgroundColor = color1;
        }
    },
    error: function (response)
    {

    }
});
}
