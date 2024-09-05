import { basicInfo } from "@/app/lib/data";

export default function About(){
    return <section id="about">
    <div className="section-head"><h4>ABOUT</h4></div>
    {
        basicInfo.about.map(item => {
            return <p>{item}</p>;
        })
    }
</section>;
}