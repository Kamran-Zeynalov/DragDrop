document.addEventListener("DOMContentLoaded", function() {
    const equalButton = document.getElementById("equal");
    const menu = document.querySelector("#menu");
    let isMenuOpen = false;

    equalButton.addEventListener("click", function() {
        if (isMenuOpen) {
            menu.style.display = "none";
            isMenuOpen = false;
        } else {
            menu.style.display = "block";
            isMenuOpen = true;
        }
    });
    // document.body.addEventListener("click", function() {
    //     if (isMenuOpen) {
    //         menu.style.display = "none";
    //         isMenuOpen = false;
    //     }
    // })

    document.addEventListener("click", function(event) {
        if (event.target !== equalButton) {
            menu.style.display = "none";
            isMenuOpen = false;
        }
    });

    document.body.appendChild(menu);
});