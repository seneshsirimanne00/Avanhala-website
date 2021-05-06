function validateForm() {
    var Fname = document.forms["myForm"]["Fname"].value;
    var Address = document.forms["myForm"]["Address"].value;
    var Telephone = document.forms["myForm"]["Telephone"].value;
    var ID = document.forms["myForm"]["ID"].value;
    var card = document.forms["myForm"]["card"].value;
    var Expire = document.forms["myForm"]["Expire"].value;
    var CVC = document.forms["myForm"]["CVC"].value;
    var Choice1 = document.getElementById("itemNums1");
    const one = "1500";
    var BreakfastOption1 = parseFloat(one);

    if (Fname == "") {
      alert("Name must be filled out");
      return false;
    }

if (Address == "") {
    alert("Where are we going to deliver food to?");
    return false;
  }
  if (Telephone == "") {
    alert("Give us your number incase we cant find you");
    return false;
  }
  if (ID == "") {
    alert("ID is a must incase you refuse to pay");
    return false;
  }
  if (card == "") {
    alert("How are we going to get paid without this?");
    return false;
  }
  
  if (Expire == "") {
    alert("Must check if your card expired");
    return false;
  }
  if (CVC == "") {
    alert("The bank wont pay us without this");
    return false;
  }

 
 
 
 if(Choice1!=" ")
  {
    Total1 = "Hi" + " " + Fname + " " + "You have ordered" + cart1 + " " +"at the price of"+" "+ BreakfastOption1 + " " + "each from the"+" "+ time +" " + "menu at a total price of"+ " " + BreakfastOption1*bucket1 ;
    alert(Total1);
    
  }
  else
  {
    alert("Please fill in all the fields");
  }
 
}
