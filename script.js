//Locomotive js Code//
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//gsap to animate nav bar items//
gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

//ephameral text animate using sheryjs//
Shery.textAnimate("#headings h1" /* Element to target.*/, {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

//anmation on sustain ephameral & visit using gsap//
gsap.from(".anim2", {
  y: 20,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  stagger: 0.3,
  ease: Expo,
});

//animating ephamerel image using SheryJs//
Shery.imageEffect("#imgntext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 7.63, range: [0, 100] },
    uFrequencyY: { value: 12.21, range: [0, 100] },
    uFrequencyZ: { value: 47.33, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 35.63 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.61, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

//animating sustain image using Sheryjs//
Shery.imageEffect("#sustainimagewrapper img", {
  style: 6,
  config: {
    noiseDetail: { value: 10.69, range: [0, 100] },
    distortionAmount: { value: 3.21, range: [0, 10] },
    scale: { value: 44.27, range: [0, 100] },
    speed: { value: 0.79, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.55, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#imgntext img", {
  y: "7",
  opacity: 0,
  duration: 2,
  ease: Expo,
});

//animation on pictures //
Shery.imageEffect(".imgeff img", {
  style: 3,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 12, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.49, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

//animation on banner image//
Shery.imageEffect("#bimg", {
  style: 5,
 config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8491171296704845},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":0.62,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.37,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":6.11,"range":[0,100]}},
  gooey: true,
});

//video animation when hovering play video code//
videoPlayAnimation = () => {
  document
    .querySelector("#ftext button")
    .addEventListener("mouseover", function () {
      gsap.to("#future video", {
        opacity: 1,
        duration: 1.5,
        ease: Power4,
      });
    });
  document
    .querySelector("#future button")
    .addEventListener("mouseleave", function () {
      gsap.to("#future video", {
        opacity: 0,
        duration: 1.5,
        ease: Power4,
      });
    });
};

videoPlayAnimation();
