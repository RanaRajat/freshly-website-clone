let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");

    btn1.addEventListener("click",function(){
        let planValue = 4;
        let planPrice = "$11.79 / meal";
        localStorage.setItem("planValue",JSON.stringify(planValue));
        localStorage.setItem("planPrice",JSON.stringify(planPrice));

        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/day.html");
    });
    btn2.addEventListener("click",function(){
        let planValue = 6;
        let planPrice = "$9.99 / meal";

        localStorage.setItem("planValue",JSON.stringify(planValue));
        localStorage.setItem("planPrice",JSON.stringify(planPrice));

        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/day.html");

    });
    btn3.addEventListener("click",function(){
        let planValue = 8;
        let planPrice = "$9.49 / meal";
        
        localStorage.setItem("planValue",JSON.stringify(planValue));
        localStorage.setItem("planPrice",JSON.stringify(planPrice));

        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/day.html");

    });
    btn4.addEventListener("click",function(){
        let planValue = 10;
        let planPrice = "$9.29 / meal";

        localStorage.setItem("planValue",JSON.stringify(planValue));
        localStorage.setItem("planPrice",JSON.stringify(planPrice));

        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/day.html");

    })
    btn5.addEventListener("click",function(){
        let planValue = 12;
        let planPrice = "$8.99 / meal";

        localStorage.setItem("planValue",JSON.stringify(planValue));
        localStorage.setItem("planPrice",JSON.stringify(planPrice));

        window.location.assign("http://127.0.0.1:5500/freshlyClone/freshly-website-clone/day.html");

    })
