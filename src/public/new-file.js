  <script>
        select = e => document.querySelector(e);
        selectAll = e => document.querySelectorAll(e);

        const stage = select('.stage');
        const staggerEach = 0.19;
        let master = gsap.timeline();

        function loopAnimation() {
            tl = gsap.timeline();
            
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
            }, 0)
            
            return tl;
        }

        function titleAnimation() {
            gsap.set('.txt', {
                transformOrigin: 'center center -30px',
                transformPerspective: 400
            });
            
            tl = gsap.timeline();
            
            tl.from('.txt', {
                rotateX: 90,
                opacity: 0,
                ease: 'power4',
                duration: 3,
                stagger: 0.3
            })
            
            return tl;
        }

        function init() {
            resize();
            window.onresize = resize;
            gsap.set(stage, { autoAlpha: 1 });
            master.add(loopAnimation()).seek(3).add(titleAnimation(), 5);
            
            stage.onclick = () => {
                master.restart().seek(3);
            }
            
            document.addEventListener('keyup', event => {
                if (event.code === 'Space') {
                    master.restart().seek(3);
                }
            })
        }

        function resize() {
            let vh = window.innerHeight;
            let sh = stage.offsetHeight;
            let scaleFactor = vh/sh;
            if(scaleFactor<1) {
                gsap.set(stage, { scale: scaleFactor });
            }
            else {
                gsap.set(stage, { scale: 1 });
            }
        }

        window.onload = () => {
            init();
        };
    </script>