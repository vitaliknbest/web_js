var num = 234245645335;
var ost = num%3600;
var hours = Math.floor( num/3600);
var minutes = Math.floor(ost/60);
var seconds = ost%60;
console.log(num);
console.log("часов - " + hours);
console.log("минут - " + minutes);
console.log("cекунд - " + seconds);


var symbols = [];
var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";

    for (var i = 0; i < text.length-1; i++ ){
        if (text.charAt(i) == "a"){
            symbols.push(i);
        }
         
    }
console.log(symbols)