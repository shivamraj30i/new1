var message = "this message is in global";
console.log("Global : message =  "+ message);

var a = function ()
{
    var message = "this message is in Function a ";
    console.log(" message IN FUNCTION a =" + message);
    b();



}
var b  = function()
{
    console.log("message in function b = " + message );

}
a();