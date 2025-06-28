function changenumber(){
    let element = Number(document.getElementById("numberinput").value);
    if (element % 2 ==0 )
    {
        document.getElementById("result").innerHTML = "The number is even";
    }
    else
    {
        document.getElementById("result").innerHTML = "The number is odd";
    }
}