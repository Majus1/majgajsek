console.log("Helo every one!")

// ::::::::::::::::::::::::::::::
// Header manipulation on scroll
// ::::::::::::::::::::::::::::::

// Header disappear-up  on scroll
document.addEventListener("DOMContentLoaded", ()=> {
    let el_autohide = document.querySelector(".mg-autohide");

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener("scroll", ()=> {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove("scrolled-dowm");
                el_autohide.classList.add("scrolled-up");
            }
            else {
                el_autohide.classList.remove("scrolled-up");
                el_autohide.classList.add("scrolled-down");
            }
            last_scroll_top = scroll_top;
        });
    }
});
// Header disappear-up  on scroll


// Header changes colorswhen scroled of hero section
const header = document.querySelector(".mg-nav");
const sectionOne = document.querySelector(".mg-header-switch");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // If viewport and header are not intersecting
            // Then add the class and change header background of header
            header.classList.add("mg-nav-scrolled");
        } else {
            header.classList.remove("mg-nav-scrolled");
        }
    });
  },
  sectionOneOptions);
  
sectionOneObserver.observe(sectionOne);
// Header changes colorswhen scroled of hero section


// Makes elements appear from nothing
const faders = document.querySelectorAll(".mg-fade-in") // Dodali smo .mg-fade-in vsaki sekciji ki jo želimo počasi fadati-in

const appearOptions = {
    threshold: 0.35
};

const appearOnScroll = new IntersectionObserver
    (function(
      entries,
      appearOnScroll) {
          entries.forEach(entry => {
              if (!entry.isIntersecting) {
                  return;
              } else {
                  entry.target.classList.add("appear");
                  appearOnScroll.unobserve(entry.target);
              }
          })
      },
      appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
// Makes elements appear from nothing
