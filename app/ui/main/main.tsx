import About from "@/app/ui/main/about/about";
import Footer from "@/app/ui/main/footer/footer";
import Section from "@/app/ui/main/section/section";
import { experience, projects } from "@/app/lib/data";

export default function Main() {
    return <main>
                <About/>
                
                {/* Experience Section */}
                <Section 
                    id="experience" 
                    heading="experience" 
                    data={experience}
                    moreText= "View Full Résumé"
                    moreURL="HemendraTripathiResume.pdf"
                    />

                {/* Projects Section */}
                <Section 
                    id="projects"
                    heading="projects" 
                    data={projects}
                    moreText= "View Full Project Archive"
                    moreURL="./HemendraTripathiResume.pdf"
                    />

                <Footer/>

                <div className="top-button">
                    <a href="#"><i className="fa-solid fa-chevron-up"></i></a>
                </div>
</main>;
}