document.querySelectorAll(".pinkcolor").forEach(function(ele){
    ele.addEventListener("mousemove", function(){
        this.style.color = "#F758A6";
        this.style.borderColor = "#F758A6";
    })
    ele.addEventListener("mouseleave", function(){
        this.style.color = "white";
        this.style.borderColor = "white";
    })
})
document.querySelector(".dis").addEventListener("mousemove",function(){
    document.querySelector("#p").style.display = 'initial';
})
document.querySelector(".dis").addEventListener("mouseleave",function(){
    document.querySelector("#p").style.display = 'none';
})
    gsap.to(".cards", {top: "50%",opacity: 1, duration: 1});
    var mc = 0;
document.querySelector("#menu").addEventListener("click",function(){
        if(mc===0){
        document.querySelector("#menut").style.opacity = '1';
        document.querySelector("#menut").style.transform = 'translateX(0px)';
        mc=1;
        }else{
        document.querySelector("#menut").style.opacity = '0';
        document.querySelector("#menut").style.transform = 'translateX(30px)';
        mc=0;
        }
    })
document.querySelectorAll(".imgcolor").forEach(function(ele){
        ele.addEventListener("mousemove", function(){
            this.style.webFilter = "blur(5px)";
            this.style.filter = "blur(5px)";
        })
        ele.addEventListener("mouseleave", function(){
            this.style.webFilter = "blur(0px)";
            this.style.filter = "blur(0px)";
        })
    })
  $(document).ready (function () {  
  $(".full-landing-image").ripples ({  
  resolution: 800,  
  perturbance: 0.04,  
});  
});  
// gsap.to("#fourthpage",{
//     backgroundColor: "black",
//         scrollTrigger: {
//             trigger: "#fourthpage",
//             start: "center bottom",
//     end: "center top",
//             markers: true,
//             scrub: true
//         }
//     })
//     gsap.to("#fivepage",{
//         backgroundColor: "black",
//             scrollTrigger: {
//                 trigger: "#fourthpage",
//                 start: "center bottom",
//         end: "center top",
//                 markers: true,
//                 scrub: true
//             }
//         })
//         gsap.to("#thirdpage",{
//             backgroundColor: "black",
//                 scrollTrigger: {
//                     trigger: "#fourthpage",
//                     start: "center bottom",
//             end: "center top",
//                     markers: true,
//                     scrub: true
//                 }
            // })
            gsap.to("main",{
                backgroundColor: "black",
                    scrollTrigger: {
                        trigger: "#fourthpage",
                        start: "center bottom",
                        end: "center top",
                        markers: true,
                        scrub: true
                    }
                })
                gsap.to("main",{
                    backgroundColor: "white",
                        scrollTrigger: {
                            trigger: "#fivepage",
                            start: "center bottom",
                            end: "center top",
                            markers: true,
                            scrub: true
                        }
                    })