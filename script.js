var crsr = document.querySelector("#cursor")
var crsrblur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
})

document.addEventListener("mousemove",function(dets){
    crsrblur.style.left=dets.x-110+"px"
    crsrblur.style.top=dets.y-110+"px"
})

gsap.to("#nav",{

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        scrub:2

    }
})

gsap.to("#main2",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main2",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})