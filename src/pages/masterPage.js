
$w.onReady(function () {
    const select = e => document.querySelector(e);
    const selectAll = e => document.querySelectorAll(e);

    const stage = select('.stage');
    const staggerEach = 0.19;
    let master = gsap.timeline();

    function loopAnimation() {
        let tl = gsap.timeline();

        tl.from('.grads__row', {
            opacity: 0,
            duration: 4,
            delay: 3,
            stagger: staggerEach,
            ease: 'sine.inOut'
        })
        .fromTo('.grads__row', {
            x: '-35%'
        }, {
            x: '35%',
            duration: 3.0,
            ease: 'power2.inOut',
            stagger: {
                each: staggerEach,
                yoyo: true,
                repeat: -1
            }
        });

        return tl;
    }

    // Start the animation
    master.add(loopAnimation());

    // Additional code for interactions or other animations can be added here.
});