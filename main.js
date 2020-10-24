var Regex_Pattern = '_________';

function processData(Test_String) {
    //Enter your code here
    var Regex = new RegExp(Regex_Pattern, "g");
    var Array = Test_String.match(Regex);
    console.log("Number of matches :", Array.length);
} 

