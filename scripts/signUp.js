let submit = document.getElementById("submitBtn");

    submit.addEventListener("click",function(){
        let email = document.getElementById("emailSignUp").value;

       let zip = document.getElementById("ZipSignUP").value;


       let hidden = document.getElementById("hidden");
      
       if((email.includes("@")&&email.length>=5)&&(zip.length===5)){

        localStorage.setItem("email",JSON.stringify(email));
        localStorage.setItem("zip",JSON.stringify(zip));
         window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/choosePlan.html");
       }
       else{
           hidden.innerText = "please enter a valid Email and Zip"
       }
    })
    