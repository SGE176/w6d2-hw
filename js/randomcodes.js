//Function to generate combination of characters
 var code = ' '; //initialize to null value
    var getCode = ' ';
    var btnvalue;
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    
    function generateCode(){
    //Creat variables to store generated codes and the type of the charaters we want to show as codes
   
    for (i=1; i <= 8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML=generateCode();

function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true){
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119,209, 0.3)";
        document.getElementById("submit").style.Color = "rgba(225, 225,225, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor =
          "rgba(73, 119,209, 1)";
        document.getElementById("submit").style.Color =
          "rgba(225, 225,225, 1)";
    }
} 
var codebox = document.getElementById("field");
codebox.addEventListener("input", evaluateCode);
function evaluateCode(){
    getCode = document.getElementById("field").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    }
}
disableButton();