import Image from "next/image";
export default function Section({id, heading, data, moreText, moreURL}: {id: string, heading: string, data: any, moreText: string, moreURL: string}){
    return <section id={id}>
    <div className="section-head"><h4>{heading.toUpperCase()}</h4></div>
    <ol>
        {
            data.map((item: any) => {
                return <li>
<div className="card">
                <div className="glass"></div>
                {
                    item.image? <div className="image-container">
                    <Image 
                        className="header-image" 
                        src={item.image} 
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>: <h1 className="duration">{item.duration}</h1>
                }
                <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <ul className="chip-container">
                        {
                            item.tags.map((tag: string) => <li className="chip">{tag}</li>)
                        }
                        
                    </ul>
                </div>
            </div>
                </li>
            })
        }
    </ol>
    <div className="resume">
        <a target="_blank" href={moreURL}>{moreText} <i className="fa-solid fa-arrow-right"></i></a>
    </div>
</section>;
}