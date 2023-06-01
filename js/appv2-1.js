const showContactOverlay = async () => {

    document.getElementById('git-overlay').classList.toggle('display-flex')
    setTimeout(()=>{
        document.getElementById('git-overlay').classList.toggle('git-overlay-visible')
    },100)

}

const hideContactOverlay = async () => {
    document.getElementById('git-overlay').classList.toggle('git-overlay-visible')
    setTimeout(()=>{
        document.getElementById('git-overlay').classList.toggle('display-flex')
    },200)
}

document.getElementById('home-section-a-cta-id').addEventListener('click',showContactOverlay)
document.getElementById('nav-social-icons-item-call').addEventListener('click',showContactOverlay)
document.getElementById('footer-social-icons-item-call').addEventListener('click',showContactOverlay)
document.getElementById('nav-booking-btn-id').addEventListener('click',showContactOverlay)
document.getElementById('git-overlay-exit').addEventListener('click',hideContactOverlay)