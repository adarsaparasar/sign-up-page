 function hello(){
      event.preventDefault();
      let a= document.forms["myForm"]["Fname"].value;
      let b=document.forms["myForm"]["Lname"].value;
      let c=document.forms["myForm"]["Email"].value;
      let d=document.forms["myForm"]["Password"].value;
      

      if(a===""){
        document.getElementById("img1").style.display="inline-flex";
        document.getElementById("er-fn").innerHTML="First Name cannot be empty";
        document.getElementById("input1").style.marginTop = "-15px";
      }
      if(b===""){
        document.getElementById("img2").style.display="inline-flex";
        document.getElementById("er-ln").innerHTML="Last Name cannot be empty";
        document.getElementById("input2").style.marginTop = "-15px";
      
      }
      if(c===""){
        document.forms["myForm"]["Email"].value = "email@example/com";
        document.getElementById("email").style.color="red";
        document.getElementById("img3").style.display="inline-flex";
        document.getElementById("er-email").innerHTML="Looks like this is not an email";
        document.getElementById("input3").style.marginTop = "-15px";
      }
      if(d===""){
        document.getElementById("img4").style.display="inline-flex";
        document.getElementById("er-pwd").innerHTML="Password cannot be empty";
        document.getElementById("input4").style.marginTop = "-15px";
      }
      
    }
    
