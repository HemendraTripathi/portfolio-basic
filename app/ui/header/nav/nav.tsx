export default function Nav(){
    return <nav>
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
</nav>;
}