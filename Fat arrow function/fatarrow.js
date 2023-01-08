//---------------------------- Syntax compare --------------------------------//

// normal function //

/*function number(n){
    return n;

}*/

//console.log(number(20));

// Arrow function //

/*var number = () => {
    return 10;
}*/

// var number = () =>  10

//console.log(number());

/*var number = (n) =>console.log(n);
number(30);*/

/*var javascript = {
    name : "Javascript",
    framework : ["React","Vue","Angular"],

    printLibraries : function(){
        var self = this
        this.framework.forEach(function(a){
            //console.log(`${this.name} loves ${a}`);
            console.log(`${self.name} loves ${a}`);
        })
    }
}*/

var javascript = {
    name: "Javascript",
    framework: ["React", "Vue", "Angular"],

    printLibraries: function () {
        //var self = this
        this.framework.forEach((a) => {
            //console.log(`${this.name} loves ${a}`);
            console.log(`${this.name} loves ${a}`);
        })
    }
}

/*
  NOTE:
     ARROW FUNCTION CAN'T CHANGE THE THIS PROPERTY 
     ARROW FUNCTION CAN'T HANDLE THE THIS PROPERTY

     BUT THE NORMAL FUNCTION CAN CHANGE THE THIS PROPERTY

*/

javascript.printLibraries();

const searchInput = document.querySelector(".search");

const display = document.querySelector(".results");

const thanks = document.querySelector(".thanks");

function show() {
    display.innerHTML = this.value;


    /*setTimeout(function () {
    
        thanks.innerHTML = `YOU TYPE ${this.value}`;
    }, 1000)*/

    var k = this;
    setTimeout(function () {

        thanks.innerHTML = `YOU TYPE ${k.value}`;

    }, 1000)
}
searchInput.addEventListener("keyup", show);


/*
 NOTE
   ARROW FUNCTION CANNOT WORK IN CONSTRUCTOR 
   IF U USE NEW KEYWORD IT WILL NOT WORK

*/

