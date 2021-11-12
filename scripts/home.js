let leftClick = document.getElementById("leftBtn");
    let a = document.getElementsByClassName("slider")[0];
    console.log(leftClick);
    console.log(a);
    leftClick.addEventListener("click",function(){
        
        console.log(a);
      
        a.style.marginLeft ="0";
        count=0;
        
    })
    let rightClick = document.getElementById("rightBtn");
    let count = 0;
    rightClick.addEventListener("click",function(){
        
   if(count==0){
    a.style.marginLeft = "-40rem";
   }
   else if(count>=1){
    a.style.marginLeft = "-80rem";
   }
       count++; 
    })


    let menuBtn = document.getElementsByClassName("MenuBtn")[0];

    menuBtn.addEventListener("click",function(){
        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/menuItems.html");
    })



    let navbarSignup = document.getElementById("navbarSignup");

    navbarSignup.addEventListener("click",function(){
        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/signup.html");
    })