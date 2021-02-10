window.onscroll = function () { stickyFunction() };

        var menu = document.querySelector(".pageHeader");
        var sticky = menu.offsetTop;

        function stickyFunction() {
            if (window.pageYOffset >= sticky) {
                menu.classList.add("sticky")
            } else {
                menu.classList.remove("sticky");
            }

        }