export default function Header() {
    return <header>
    <div>
        <h1><a href="#">Hemendra Tripathi</a></h1>
        <h4>Full Stack Developer</h4>
        <p>Crafting digital experiences,<br/>one line of code at a time.</p>
        <nav>
            <ul>
                <li>
                    <a className="nav-item active" href="#about">
                        <span className="nav-indicator"></span>
                        <span className="nav-text">ABOUT</span>
                    </a>
                </li>
                <li>
                    <a className="nav-item" href="#experience">
                        <span className="nav-indicator"></span>
                        <span className="nav-text">EXPERIENCE</span>
                    </a>
                </li>
                <li>
                    <a className="nav-item" href="#projects">
                        <span className="nav-indicator"></span>
                        <span className="nav-text">PROJECTS</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <ul>
        <li>
            <a href="https://github.com/HemendraTripathi" target="_blank" className="nav-item">
                <i className="fa-brands fa-github"></i>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/hemendratripathi" target="_blank" className="nav-item">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/hemendra_666/" target="_blank" className="nav-item">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
            <a href="https://x.com/hemendra_666" target="_blank" className="nav-item">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
        </li>
    </ul>
</header>;
}