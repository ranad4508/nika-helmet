document.addEventListener("DOMContentLoaded", function() {
    var searchCollapse = document.getElementById("searchCollapse");
    var searchToggler = document.querySelector(".navbar-toggler");

    searchToggler.addEventListener("click", function() {
        if (searchCollapse.classList.contains("show")) {
            searchCollapse.classList.remove("show");
        } else {
            searchCollapse.classList.add("show");
        }
    });
});