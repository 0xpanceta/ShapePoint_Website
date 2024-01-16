document.getElementById('hamburger-btn').addEventListener('click', function() {
    console.log("clicked");
    var menu = document.getElementById('menu-items');
    menu.classList.toggle('visible'); // Simpler toggle;
    console.log(menu.classList.contains('visible'));
    console.log(menu.classList); // Debugging

});
