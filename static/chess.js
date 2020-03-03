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
