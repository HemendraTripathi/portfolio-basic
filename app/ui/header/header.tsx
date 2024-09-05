import Nav from "@/app/ui/header/nav/nav";
import Contacts from "@/app/ui/header/contact/contact";

export default function Header() {
    return <header>
    <div>
        <h1><a href="#">Hemendra Tripathi</a></h1>
        <h4>Full Stack Developer</h4>
        <p>Crafting digital experiences,<br/>one line of code at a time.</p>
        <Nav/>
    </div>
    <Contacts/>
</header>;
}