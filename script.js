const appear1 = document.querySelector('.appear1'); 
                const cb1 = function(entries){
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                    entry.target.classList.add('inview');
                    entry.unobserve(entry.target)
                    }
                });
                }
                const io1 = new IntersectionObserver(cb1);
                io1.observe(appear1);

                const appear2 = document.querySelector('.appear2'); 
                const cb2= function(entries){
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                    entry.target.classList.add('inview');
                    entry.unobserve(entry.target)
                    }
                });
                }
                const io2 = new IntersectionObserver(cb2);
                io2.observe(appear2);

                const appear3 = document.querySelector('.appear3'); 
                const cb3 = function(entries){
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                    entry.target.classList.add('inview');
                    entry.unobserve(entry.target)
                    }
                });
                }
                const io3 = new IntersectionObserver(cb3);
                io3.observe(appear3);

                const appear4 = document.querySelector('.appear4'); 
                const cb4 = function(entries){
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                    entry.target.classList.add('inview');
                    entry.unobserve(entry.target)
                    }
                });
                }
                const io4 = new IntersectionObserver(cb4);
                io4.observe(appear4);

                // window.scrollTo(0, 0);


                let mybutton = document.getElementById("backt-to-top");
                mybutton.addEventListener("click", backToTop);

                function backToTop() {
                    document.body.scrollTop = 0;w
                    document.documentElement.scrollTop = 0;
                  }