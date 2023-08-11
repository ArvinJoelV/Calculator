function clearScreen(){
    document.querySelector(".display").value="";
}
function display(value){
    document.querySelector(".display").value+=value;
}
function calculate(){
    var question=document.querySelector(".display").value;
    var solution=eval(question);
    document.querySelector(".display").value=solution;
}