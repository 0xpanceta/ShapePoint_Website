// Define your navbar HTML
const navbarHTML = `
<div class="navbar">
<ul>
    <li>
        <a href="index.html"><strong>ShapePoint</strong></a>
    </li>
<div class="right-buttons">
    <li>
        <a href="location.html">I want to talk to a real person</a>
    </li>
    <li>
        <a href="brand.html">What will I get?</a>
    </li>
    <li>
        <a href="features.html">What does it do?</a>
    </li>
    <li>
        <a href="team.html">Who's behind this?</a>
    </li>
</div>
</ul>
</div>
`;

// Define your footer HTML
const footerHTML = `
<div class="footer">
<a href="#">Take me back to the top.</a>
<p class="footer-title">You probably don't want to copy this website.<br>I made it while studying at Barcelona Code School.</p> <p>All rights (probably?) reserved.</p>
<p>Avenida São Gabriel 201, São Paulo, Brazil</p>
</div>
`;

// Function to load the content
function loadSharedContent() {
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}
