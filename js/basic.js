//give the timeline and child tweens their own id.
var tl = gsap.timeline({ id: "timeline" });
tl.to(".orange", { duration: 1, x: 700, id: "orange" }).to(".green", {
  duration: 2,
  x: 700,
  ease: "bounce",
  id: "green",
});

//give this tween an id
gsap.to(".grey", { duration: 1, x: 700, rotation: 360, delay: 3, id: "grey" });

//instantiate GSDevTools with default settings
GSDevTools.create();

//GSDevTools will control all animations on the Global Timeline and provide access via the drop-down menu to any animation with an id.
