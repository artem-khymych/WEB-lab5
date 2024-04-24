document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".horizontal-menu li");

    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            const submenu = this.querySelector("ul");

            if (submenu) {
                e.preventDefault();
                submenu.classList.toggle("show");
            } else {
                const page = this.querySelector("a").getAttribute("href");
                if (page) {
                    e.preventDefault();
                    window.location.href = page;
                }
            }
        });
    });
});
