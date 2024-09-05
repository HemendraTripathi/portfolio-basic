import Nav from "@/app/ui/header/nav/nav";
import Contacts from "@/app/ui/header/contact/contact";
import { basicInfo } from "@/app/lib/data";

export default function Header() {
    return <header>
    <div>
        <h1><a href="#">{basicInfo.name}</a></h1>
        <h4>{basicInfo.designation}</h4>
        {
            basicInfo.shortDescription.map(text => {
                return <p>{text}</p>
            })
        }
        <Nav/>
    </div>
    <Contacts/>
</header>;
}