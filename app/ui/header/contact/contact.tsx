import { contacts } from "@/app/lib/data";

export default function Contacts() {
    return <ul>
        {
            contacts.map((item) => {
                return <li>
                            <a href={item.url} target="_blank" className="nav-item">
                                <i className={item.icon}></i>
                            </a>
                        </li>
            })
        }
</ul>;
}