// truthy-falsy

//var myVar = "true";
//var myVar = "";
var myVar = "test";
var myVar = [];
// False,0,"",null,undefined,NAN
if(myVar)
{
    console.log("I am truthy");
}
else{
    console.log("I am falsy");
}