//Question 2
// code to test if a number is integer
let x=10
document.write("Question 2 \n")
if(x%1==0){
    document.write("x is integer \n")
}
else{
    document.write("x is not integer \n")
}
// **************************************
function fn(){
    var y=document.getElementById("text").value
    document.write("Question 2 \n")
    // alert("value enter is :" +y)
    if(y%1===0){
        document.write("The number you have entered is an integer ")
    }
    else{
        document.write("The number you have entered is not integer ")
    }
}
