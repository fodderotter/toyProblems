// write a function that makes a triangle of the character `#`. (it can be a lopsided triangle.) do this without manually writing each line in your code. example result:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function triangle(num){
    var sign = "#";
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(sign).toString(); 
        
        console.log(arr);
    }
}
triangle(6);