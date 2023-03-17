

function SubForm2 (){
  
   if(form1.User_Name.value=="" || form1.password.value=="" || form1.Amount.value=="" || form1.Expence_head.value=="" || form1.Description.value==""){
   
  }
   else if (form1.User_Name.value == "Avinash" && form1.password.value == "Avinash" || (form1.User_Name.value == "User 4" && form1.password.value == "User 4") || (form1.User_Name.value == "User 3" && form1.password.value == "User 3") || (form1.User_Name.value == "User 2" && form1.password.value == "User 2")) 
    {

        alert("Data Entered");
        
        // window.location.href = "http://www.avinashmaurya.me";

        
       
    }  

   

    else {
       
            alert("Wrong Password");


            // for not changing the values
            // document.getElementById('User_Name').value = form1.User_Name.value

      
    }
 
}

