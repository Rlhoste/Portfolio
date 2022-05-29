gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause restart pause",
    scroller: ".container",


});

gsap.to("#wave", {
    scrollTrigger: {
        trigger: "#p1title1",
        toggleActions: "restart reverse restart pause"
    },
    duration: 1,

    ease: "elastic.out(0.5, 1)",
    x: innerWidth
})

gsap.to("#wave2", {
    scrollTrigger: {
        trigger: "#p1title1",
        toggleActions: "restart reverse restart pause"
    },

    duration: 1,
    ease: "elastic.out(0.1, 1)",
    x: innerWidth
})

let a = 1.5;
let a2 = 1.5;

gsap.to("#wave3", {
    scrollTrigger: {
        trigger: ".pres",
        toggleActions: "restart resume restart pause"
    },

    duration: 1,
    ease: Elastic.easeOut.config(a, a2),
    x: -innerWidth * 1.05
})


gsap.to("#wave4", {
    scrollTrigger: {
        trigger: ".pres",
        toggleActions: "restart resume restart pause"
    },

    duration: 1,
    ease: Elastic.easeOut.config(a, a2),
    //ease: "elastic.out(0.1, 1)",
    x: -innerWidth
})

gsap.to("#wave5", {
    scrollTrigger: {
        trigger: ".pres",
        toggleActions: "restart resume restart pause"
    },

    duration: 1,
    ease: Elastic.easeOut.config(a, a2),
    //ease: "elastic.out(0.1, 1)",
    x: -innerWidth
})

gsap.to("#wave6", {
    scrollTrigger: {
        trigger: ".pres",
        toggleActions: "restart resume restart pause"
    },

    duration: 1,
    ease: Elastic.easeOut.config(a, a2),
    //ease: "elastic.out(0.1, 1)",
    x: -innerWidth
})

gsap.to("#cloud", {
    scrollTrigger: {
        trigger: ".pres",
        toggleActions: "restart resume restart pause"
    },

    duration: 1,
    ease: Elastic.easeOut.config(a, a2),
    //ease: "elastic.out(0.1, 1)",
    x: innerWidth
})

gsap.to("#p2title1", {
    scrollTrigger: {
        trigger: ".pres",
        toggleActions: "restart resume restart pause"
    },

    duration: 1,
    //ease: Back.easeOut.config(4),
    ease: "elastic.out(1, 1)",
    x: innerWidth * 0.8
})


let i = 0;
let inner = window.innerWidth;

function addCard() {
    i++;
    if (i == 1) {
        gsap.to(".wavecollec2", {
            duration: 2,
            ease: Elastic.easeOut.config(a, a2),
            //ease: "elastic.out(0.1, 1)",
            x: inner
        })
        gsap.to("#p2title1", {
            duration: 2,
            ease: Elastic.easeOut.config(a, a2),
            //ease: "elastic.out(0.1, 1)",
            x: -innerWidth
        })
        gsap.to(".pres", {
            duration: 2,
            ease: Elastic.easeOut.config(a, a2),
            x: 0.5 * innerWidth
        })
        gsap.to(".transition1", {
            duration: 0.75,
            scale: 1.5
        })
        gsap.to(".p2block2img", {
            x: innerWidth,
            duration: 0.5
        })
        gsap.to("#p2title2", {
            x: innerWidth,
            duration: 0.5
        })
        gsap.to("#p2title3", {
            x: innerWidth * 1.4,
            duration: 0.5
        })
    } else if (i == 2) {
        gsap.to(".p2block2img", {
            x: -innerWidth,
            duration: 0.2
        })
        gsap.to("#p2title3", {
            x: -innerWidth,
            duration: 0.4
        })
        gsap.to(".p2block3", {
            x: -innerWidth,
            duration: 0.5
        })
        gsap.to("#panel-presentation", {
            backgroundColor: '#000038',
            duration: 0.5
        })
        gsap.to(".transition1", {
            duration: 0.25,
            x: -innerWidth
        })

        gsap.to("#p2title2", {
            x: -innerWidth,
            duration: 0.25
        })


    } else if (i == 3) {


        gsap.to("#panel-presentation", {
            backgroundColor: '#000015',
            duration: 1
        })
        gsap.to(".p2block3", {
            x: -2 * innerWidth,
            duration: 0.5
        })

        gsap.to(".p2block4", {
            x: -innerWidth,
            duration: 0.5
        })
    } else if (i == 4) {
        gsap.to(".wavecollec2", {
            duration: 2,
            ease: Elastic.easeOut.config(a, a2),
            //ease: "elastic.out(0.1, 1)",
            x: 0
        })
        gsap.to("#p2title1", {
            duration: 1,
            ease: Elastic.easeOut.config(a, a2),
            //ease: "elastic.out(0.1, 1)",
            x: innerWidth * 0.8
        })
        gsap.to(".pres", {
            duration: 1,
            ease: Elastic.easeOut.config(a, a2),
            x: 0
        })
        gsap.to("#panel-presentation", {
            backgroundColor: '#333290',
            duration: 1
        })

        gsap.to(".transition1", {
            duration: 0.75,
            scale: 1,
            x: 0
        })
        gsap.to(".p2block4", {
            x: innerWidth,
            duration: 0.5
        })
        gsap.to(".p2block3", {
            x: 2 * innerWidth,
            duration: 0
        })
        i = 0
    }

}




gsap.to(".orange p", {
    scrollTrigger: ".orange",
    duration: 2,
    rotation: 360
});

gsap.to(".red", {
    scrollTrigger: {
        trigger: ".red",
        toggleActions: "restart pause restart pause"
    },
    duration: 2,
    backgroundColor: "#080832",
    boxShadow: "inset 1em 4em 6em 0em rgba(16,16,64,0.5), inset -1em -4em 6em 0em rgba(16,16,64,0.5)",
    ease: "none"
});

gsap.to(".yoyo p", {
    scrollTrigger: ".yoyo",
    scale: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2"
});

gsap.to(".yoyo p", {
    scrollTrigger: ".yoyo",
    scale: 2,
    repeat: -1,
    yoyo: true,
    ease: "power2"
});

let durProgress = 0.8;

tl1 = new TimelineMax({
    scrollTrigger: "#progress1",
    onUpdate: function() { $("#progress1_progress").html(Math.round(tl2.progress() * 85) + "%"); }
});

tl1.to($("#progress1"), {
    duration: durProgress,
    value: 85
});

tl2 = new TimelineMax({
    scrollTrigger: "#progress2",
    onUpdate: function() { $("#progress2_progress").html(Math.round(tl2.progress() * 75) + "%"); }
});

tl2.to($("#progress2"), {
    duration: durProgress,
    value: 75
});

tl3 = new TimelineMax({
    scrollTrigger: "#progress3",
    onUpdate: function() { $("#progress3_progress").html(Math.round(tl2.progress() * 45) + "%"); }
});

tl3.to($("#progress3"), {
    duration: durProgress,
    value: 45
});

tl4 = new TimelineMax({
    scrollTrigger: "#progress4",
    onUpdate: function() { $("#progress4_progress").html(Math.round(tl2.progress() * 60) + "%"); }
});

tl4.to($("#progress4"), {
    duration: durProgress,
    value: 60
});

tl5 = new TimelineMax({
    scrollTrigger: "#progress5",
    onUpdate: function() { $("#progress5_progress").html(Math.round(tl2.progress() * 70) + "%"); }
});

tl5.to($("#progress5"), {
    duration: durProgress,
    value: 70
});

tl6 = new TimelineMax({
    scrollTrigger: "#progress6",
    onUpdate: function() { $("#progress6_progress").html(Math.round(tl2.progress() * 65) + "%"); }
});

tl6.to($("#progress6"), {
    duration: durProgress,
    value: 65
});

tl7 = new TimelineMax({
    scrollTrigger: "#progress7",
    onUpdate: function() { $("#progress7_progress").html(Math.round(tl2.progress() * 80) + "%"); }
});

tl7.to($("#progress7"), {
    duration: durProgress,
    value: 80
});

tl8 = new TimelineMax({
    scrollTrigger: "#progress8",
    onUpdate: function() { $("#progress8_progress").html(Math.round(tl2.progress() * 65) + "%"); }
});

tl8.to($("#progress8"), {
    duration: durProgress,
    value: 65
});

tl9 = new TimelineMax({
    scrollTrigger: "#progress9",
    onUpdate: function() { $("#progress9_progress").html(Math.round(tl2.progress() * 25) + "%"); }
});

tl9.to($("#progress9"), {
    duration: durProgress,
    value: 25
});

tl10 = new TimelineMax({
    scrollTrigger: "#progress10",
    onUpdate: function() { $("#progress10_progress").html(Math.round(tl2.progress() * 30) + "%"); }
});

tl10.to($("#progress10"), {
    duration: durProgress,
    value: 30
});

gsap.to(".galery-text", {
    duration: 30,
    x: innerWidth * 2,
    repeat: -1,
    ease: "none"
});

gsap.to(".galery-text2", {
    duration: 30,
    x: innerWidth * 2,
    repeat: -1,
    ease: "none"
});

gsap.to(".galery-text3", {
    duration: 120,
    x: innerWidth * 2,
    repeat: -1,
    ease: "none"
});

// gsap.to(".galery-text3", {
//     duration: 2,
//     color: '#00F',
//     yoyo: true,
//     repeat: -1
// });

gturn = gsap.to(".galery-subcontainer", {
    duration: 15,
    x: innerWidth * 1,
    repeat: -1,

    ease: "none"
});

gturn2 = gsap.to(".galery-subcontainer2", {
    duration: 15,
    x: 1 * innerWidth,
    repeat: -1,
    ease: "none"
});

let zind;
document.querySelectorAll('.galery-img-container').forEach(item => {
    item.addEventListener('click', event => {

        gsap.to(item.children[0], {
            scale: 3,
            zIndex: 1,
        });
        gsap.to(item, {
            fontSize: '25',
            zIndex: 1,
        });
    })

    item.addEventListener('mouseleave', event => {
        gsap.to(item.children[0], {
            scale: 1,
            zIndex: 0,

        });
        gsap.to(item, {
            fontSize: '0',
            zIndex: 0
        });
    })

})

let menu2 = document.querySelector('.galery-container')
menu2.addEventListener('mouseenter', (e) => {
    gsap.to('.galery-text', { duration: 0.5, top: 0.20 * innerHeight, color: '#FFF' })
    gturn.pause();
})

menu2.addEventListener('mouseleave', (e) => {
    gsap.to('.galery-text', { duration: 0.5, top: 0.22 * innerHeight, color: 'rgba(128, 128, 255, 0.5)' })
    gturn.resume();
})

let menu3 = document.querySelector('.galery-container2')
menu3.addEventListener('mouseenter', (e) => {
    gsap.to('.galery-text2', { duration: 0.5, top: 0.60 * innerHeight, color: '#FFF' })
    gturn2.pause();
})

menu3.addEventListener('mouseleave', (e) => {
    gsap.to('.galery-text2', { duration: 0.5, top: 0.62 * innerHeight, color: 'rgba(128, 128, 255, 0.5)' })
    gturn2.resume();
})

gsap.to("#panel-projets", {
    scrollTrigger: {
        trigger: "#panel-projects",
        toggleActions: "restart pause restart pause"
    },
    duration: 0,
    backgroundColor: "#117",
    boxShadow: "inset 1em 4em 6em 0em rgba(0,0,32,0.5), inset -1em -4em 6em 0em rgba(0,0,32,0.25)",
    ease: "none"
});

gsap.to(".cache-p4", {
    scrollTrigger: {
        trigger: ".cache-p4",
        toggleActions: "restart pause restart pause"
    },
    duration: 0,
    backgroundColor: "#117",
    ease: "none"
});

gsap.to(".cache-p42", {
    scrollTrigger: {
        trigger: ".cache-p4",
        toggleActions: "restart pause restart pause"
    },
    duration: 0,
    backgroundColor: "#117",
    ease: "none"
});