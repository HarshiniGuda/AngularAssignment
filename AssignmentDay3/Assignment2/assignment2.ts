alert("Hi!How are you?")
console.log("Prompt")
var Name=prompt("What is your name?","guest");
console.log(Name);
console.log("Confirm")

let deletePost=confirm("Do you want to delete this file?")

if(deletePost){
    console.log("Your file has been deleted successfully")

}
else
{
    console.log("Your file has not been deleted")
  
}