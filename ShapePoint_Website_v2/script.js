// Define your navbar HTML
const navbarHTML = `
<div class="navbar">
<ul>
    <li class="neon-button pink">
        <a href="index.html"><strong>ShapePoint</strong></a>
    </li>
<div class="right-buttons">
    <li class="neon-button blue">
        <a href="results.html">Results</a>
    </li>
    <li class="neon-button blue">
        <a href="features.html">Features</a>
    </li>
    <li class="neon-button blue">
        <a href="apply.html">Apply</a>
    </li>
    <li class="neon-button blue">
        <a href="team.html">Team</a>
    </li>
</div>
</ul>
</div>
`;

// Define your footer HTML
const footerHTML = `
<div class="footer">
<div class="footer-content">
<div class="footer-section"><a href="#">Take me back to the top.</a></div>
<div class="footer-section"><p class="footer-title">You probably don't want to copy this website.<br>I made it while studying at Barcelona Code School.</p> <p>All rights (probably?) reserved.</p></div>
<div class="footer-section"><p>Avenida São Gabriel 201, São Paulo, Brazil</p></div></div>
</div>
`;

// Function to load the content
function loadSharedContent() {
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}
