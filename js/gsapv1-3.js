const enter = gsap.timeline();

enter
.from('#nav-left-logo-id',{x: -5, opacity: 0, duration: 0.5})
.from('#nav-social-icons-instagram',{x: -5, opacity: 0, duration: 0.5})
.from('#nav-social-icons-whatsapp',{x: -5, opacity: 0, duration: 0.5},"-=0.4")
.from('#nav-social-icons-call',{x: -5, opacity: 0, duration: 0.5},"-=0.4")
.from('#nav-social-icons-email',{x: -5, opacity: 0, duration: 0.5},"-=0.4")
.from('#nav-booking-btn-wrapper',{y: -10, opacity: 0, duration: 0.5},"-=0.8")
.from('#home-section-a-id',{y: -30, opacity: 0, duration: 0.5},"-=0.8")
.from('#home-section-a-header-l-1',{y: -30, opacity: 0.5, duration: 0.5},"-=0.4")
.from('#home-section-a-header-l-2',{y: -30, opacity: 0.5, duration: 0.5},"-=0.4")
.from('#home-section-a-header-l-3',{y: -30, opacity: 0.5, duration: 0.5},"-=0.4")
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
.from('#home-section-b-id',{y:100 ,opacity: 0, duration: 1})
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