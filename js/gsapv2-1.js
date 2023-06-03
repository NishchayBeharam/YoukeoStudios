const enter = gsap.timeline();

enter
.from('#nav-left-logo-id',{x: -5, opacity: 0, duration: 0.5})
.from('#nav-social-icons-instagram',{x: -5, opacity: 0, duration: 0.5})
.from('#nav-social-icons-whatsapp',{x: -5, opacity: 0, duration: 0.5},"-=0.4")
.from('#nav-social-icons-call',{x: -5, opacity: 0, duration: 0.5},"-=0.4")
.from('#nav-social-icons-email',{x: -5, opacity: 0, duration: 0.5},"-=0.4")
.from('#nav-booking-btn-wrapper',{y: -10, opacity: 0, duration: 0.5},"-=0.8")
.from('#home-section-a-id',{y: -30, opacity: 0, duration: 1},"-=0.8")
.from('#home-section-a-header-l-1',{y: -30, opacity: 0, duration: 0.5},"-=0.4")
.from('#home-section-a-header-l-2',{y: -30, opacity: 0, duration: 0.5},"-=0.4")
.from('#home-section-a-header-l-3',{y: -30, opacity: 0, duration: 0.5},"-=0.4")
.from('#home-section-a-cta-id',{y: -50, opacity: 0, duration: 0.8},"-=0.7")


const sectionBIntro = gsap.timeline({
    scrollTrigger:{
        trigger: '#home-section-b-id',
        start: '-10% 80%',
        end: '70% 80%',
        scrub: 1,
        // markers: true,
    }
});
sectionBIntro
.from('#home-section-b-id',{y:100 ,opacity: 0, duration: 0.5})
.from('#home-section-b-service-card-a-id',{y: 100, opacity: 0, duration: 1},"-=0.7")
.from('#home-section-b-service-card-b-id',{y: 100, opacity: 0, duration: 1},"-=0.7")
.from('#home-section-b-service-card-c-id',{y: 100, opacity: 0, duration: 1},"-=0.7")

const sectionBOutro = gsap.timeline({
    scrollTrigger:{
        trigger: '#home-section-c-id',
        start: '30% 80%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true,
    }
});
sectionBOutro
.to('#home-section-b-service-card-a-id',{y: -100, opacity: 0, duration: 1})
.to('#home-section-b-service-card-b-id',{y: -100, opacity: 0, duration: 1},"-=0.7")
.to('#home-section-b-service-card-c-id',{y: -100, opacity: 0, duration: 1},"-=0.7")


const sectionC = gsap.timeline({
    scrollTrigger:{
        trigger: '#home-section-c-id',
        start: 'top 70%',
        end: '75% 80%',
        scrub: 1,
        // markers: true,
    }
});
sectionC
.from('#home-section-c-id',{opacity: 0, duration: 1})
.from('#home-section-c-card-a',{y: 100, opacity: 0, duration: 1},"-=0.7")
.from('#home-section-c-card-b',{y: 100, opacity: 0, duration: 1},"-=0.7")

const sliderA = gsap.timeline({repeat: -1})

sliderA
.to('#home-section-c-slider-a-slide-1',{transform: "translateY(100%)" ,duration:1},"+=2")
.to('#home-section-c-slider-a-slide-2',{transform: "translateY(100%)" ,duration:1},"+=2")
.to('#home-section-c-slider-a-slide-3',{transform: "translateY(100%)" ,duration:1},"+=2")


const sliderB = gsap.timeline({repeat: -1, delay: 1})

sliderB
.to('#home-section-c-slider-b-slide-1',{transform: "translateY(100%)" ,duration:1},"+=2")
.to('#home-section-c-slider-b-slide-2',{transform: "translateY(100%)" ,duration:1},"+=2")
.to('#home-section-c-slider-b-slide-3',{transform: "translateY(100%)" ,duration:1},"+=2")

const sliderPlayPauseA = document.getElementById('home-section-c-slider-a-play-pause-btn')
const sliderPlayBtnA = document.getElementById('home-section-c-slider-a-play-btn')
const sliderPauseBtnA = document.getElementById('home-section-c-slider-a-pause-btn')

let sliderAPauseFlag = 0
sliderPlayPauseA.addEventListener('click',()=>{
    sliderPauseBtnA.classList.toggle('display-none')
    sliderPlayBtnA.classList.toggle('display-none')
    if(sliderAPauseFlag==0){
        sliderA.pause()
        sliderAPauseFlag = 1
    } else {
        sliderA.play()
        sliderAPauseFlag = 0
    }
})

const sliderPlayPauseB = document.getElementById('home-section-c-slider-b-play-pause-btn')
const sliderPlayBtnB = document.getElementById('home-section-c-slider-b-play-btn')
const sliderPauseBtnB = document.getElementById('home-section-c-slider-b-pause-btn')
let sliderBPauseFlag = 0
sliderPlayPauseB.addEventListener('click',()=>{
    sliderPauseBtnB.classList.toggle('display-none')
    sliderPlayBtnB.classList.toggle('display-none')
    if(sliderBPauseFlag==0){
        sliderB.pause()
        sliderBPauseFlag = 1
    } else {
        sliderB.play()
        sliderBPauseFlag = 0
    }
})