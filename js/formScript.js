 function login() {

  var letters = /^[A-Z a-z]+$/;

  var b = document.forms["myForm"]["bankName"].value;
  if(b == ""){
      alert(" Name of Bank is empty");
      return false;
  }
    else if (b.match(letters)) {
  }
    else{
      alert("Name of Bank contains invalid characters(letters and spaces only!)");
      return false;
  }

  var a = document.forms["myForm"]["accName"].value;
    if(a == ""){
      alert(" accName is empty");
      return false;
    }
    else if (a.match(letters)) {
    }
    else{
      alert("AccName contains invalid characters(letters and spaces only!)");
      return false;
    }

    var i = document.forms["myForm"]["ibNumber"].value;
      if(i == "" || isNaN(i)){
        alert("Iban is empty or details entered is not a number ");
        return false;
      }

    var s = document.forms["myForm"]["swiftBic"].value;
      if(s == "" || isNaN(s)){
        alert("Swift/Bic is empty or details entered is not a number, please enter again ");
        return false;
        }

      var c = document.forms["myForm"]["currency"].value;
        if(c == ""){
          alert("Currency space is empty, please enter currency ");
          return false;
        }
        else if (c.match(letters)) {
        }
        else{
          alert("Currency contains invalid characters(letters and spaces only!)");
          return false;
        }

        document.getElementById("txtMessage").innerHTML = "Your details were sent successefully ";
        document.getElementById("form").style.display= "none";
        document.getElementById("formH1").style.display= "none";
        document.getElementById("logoutForm").style.display= "block";
      }



      function logout(){
        document.getElementById("form").style.display= "block";
        document.getElementById("formH1").style.display= "block";
        document.getElementById("logoutForm").style.display= "none";
        document.getElementById("bankName").value= "";
        document.getElementById("accName").value= "";
        document.getElementById("ibNumber").value= "";
        document.getElementById("swiftBic").value= "";
        document.getElementById("currency").value= "";
      }
