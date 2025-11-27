
function Footer() {
    return (
        <footer className="app-footer">
        <span>
            © {new Date().getFullYear()} Movie Search App &bull; Built by Teja Janga &bull;
            <a href="https://github.com/Teja-Janga/Movie-Search-App">
                    &nbsp;Source <i class="fa-brands fa-github"></i></a>
        </span>
        <nav class="footer-social">
                <ul>
                    <li><a href="https://www.linkedin.com/in/teja-janga"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/teja70327/"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://github.com/Teja-Janga"><i class="fa-brands fa-github"></i></a></li>
                </ul>
            </nav>
        </footer>
    );
}
export default Footer