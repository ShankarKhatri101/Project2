gsap.from("#intro h1", {
  y: 100,
  delay: 1,
  duration: 1.5,
  opacity: 0,
  stagger: 1,
});
gsap.from("#heroImg", {
  y: 100,
  delay: 0,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#heroImgDiv",
    scroller: "body",
    start: "top 30%",
    end: "top 0%",
  },
});
gsap.from("#model2ImgDiv img", {
  y: 100,
  delay: 0,
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#model2ImgDiv img",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
  },
});
gsap.from("#modleImgDiv img", {
  x: 100,
  delay: 0,
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#modleImgDiv img",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
  },
});
gsap.from("#rightWork", {
  y: 100,
  delay: 0,
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#rightWork",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
  }
});
gsap.from("#about", {
  y: 100,
  delay: 0,
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
  }
});
gsap.from("footer", {
  y: 100,
  delay: 0,
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
  }
});

const on = document.querySelector("#on");
const slideMenu = document.querySelector("#slideMenu");
const off = document.querySelector("#off");


on.addEventListener("click",()=>{
  slideMenu.style.right= "0%";
  console.log("click")
})
off.addEventListener("click",()=>{
   slideMenu.style.right= "-30%";
})
