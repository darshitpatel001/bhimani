const SCROLLED_STATE_CLASS = "scrolled";

const onScroll = () => {

    const scroll = document.documentElement.scrollTop

    if (scroll > 0) {
        document.getElementById("headerSection").classList.add(SCROLLED_STATE_CLASS);
    } else {
        document.getElementById("headerSection").classList.remove(SCROLLED_STATE_CLASS)
    }
}

window.addEventListener('scroll', onScroll)