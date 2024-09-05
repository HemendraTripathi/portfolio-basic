import About from "@/app/ui/main/about/about";
import Footer from "@/app/ui/main/footer/footer";

export default function Main() {
    return <main>
    <About/>
    {/* Experience Section */}
    {/* Projects Section */}
    <section id="experience">
        <div className="section-head"><h4>EXPERIENCE</h4></div>
        <ol>
            <li>
                <div className="card">
                    <div className="glass"></div>
                    <h1 className="duration">2020 - PRESENT</h1>
                    <div className="content">
                        <h4>Freelance Developer</h4>
                        <p>
                            Demonstrated expertise in building robust web applications using
MongoDB, Express.js, React, and Node.js.
Utilized Python for backend development, automation scripting, and
machine learning projects.
Designed and developed RESTful APIs for data exchange.
Developed a finance app encompassing core banking features and
accounting functionalities.
Created Telegram bots to automate tasks and provide user
interactions.
Built comprehensive web applications from frontend to backend.
Automated various tasks and processes using Python scripts.
Applied machine learning techniques to solve specific problems.
                        </p>
                        <ul className="chip-container">
                            <li className="chip">JavaScript</li>
                            <li className="chip">TypeScript</li>
                            <li className="chip">React</li>
                            <li className="chip">Storybook</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="glass"></div>
                    <h1 className="duration">2022 - 2023</h1>
                    <div className="content">
                        <h4>Software Development Instructor</h4>
                        <p>
                            Instructed programming fundamentals (C, C++, Java, Python) and
advanced topics (DSA).
Led workshops on web development using ASP.NET and Android
app development with Android Studio in college settings.
Developed and delivered engaging training curricula.
Mentored students in software development projects (web, mobile).
Assessed student progress and provided constructive feedback.

                        </p>
                        <ul className="chip-container">
                            <li className="chip">JavaScript</li>
                            <li className="chip">TypeScript</li>
                            <li className="chip">React</li>
                            <li className="chip">Storybook</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="glass"></div>
                    <h1 className="duration">JUNE - NOV 2022</h1>
                    <div className="content">
                        <h4>Full Stack Development Intern</h4>
                        <p>Developed full-stack app using PHP Laravel.
                            Gained hands-on experience in PHP, Database Management and
                            Front-end Technologies.
                            </p>
                        <ul className="chip-container">
                            <li className="chip">JavaScript</li>
                            <li className="chip">TypeScript</li>
                            <li className="chip">React</li>
                            <li className="chip">Storybook</li>
                        </ul>
                    </div>
                </div>
            </li>

        </ol>
        <div className="resume">
            <a target="_blank" href="./HemendraTripathiResume.pdf">View Full Résumé</a>
        </div>
    </section>
    <section id="projects">
        <div className="section-head"><h4>PROJECTS</h4></div>
        
        <ol>
            <li>
                <div className="card">
                    <div className="glass"></div>
                    <div className="image-container">
                        {/* <img className="header-image" src="./images/nidhi.png" loading="lazy" alt=""> */}
                    </div>
                    <div className="content">
                        <h4>Nidhi Finance App</h4>
                        <p>A digital platform that allows members of a
                            Nidhi company to access and manage their
                            financial accounts conveniently.
                            Developed a full-stack Nidhi finance
application using Next.js, Express.js,
MongoDB, and Flutter.
Implemented robust RESTful APIs using
Express.js and Node.js.
Leveraged MongoDB for efficient & secure data
storage and retrieval.
</p>
                        <ul className="chip-container">
                            <li className="chip">Next.js</li>
                            <li className="chip">Express.js</li>
                            <li className="chip">MongoDB</li>
                            <li className="chip">Flutter</li>
                            <li className="chip">RestAPI</li>
                            <li className="chip">JavaScript</li>
                            <li className="chip">TypeScript</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="glass"></div>
                    <div className="image-container">
                        {/* <img className="header-image" src="./images/nidhi.png" loading="lazy" alt=""> */}
                    </div>
                    <div className="content">
                        <h4>Telegram Food Ordering Bot</h4>
                        <p>Utilizes Telegram Bot API for interaction,
                            integrates with restaurant APIs for menu and
                            order management.
                            Utilized Python libraries like requests for API
interactions and telebot for Telegram bot
functionalities.
Designed error handling and exception
handling mechanisms.</p>
                        <ul className="chip-container">
                            <li className="chip">Python</li>
                            <li className="chip">Telegram API</li>
                            <li className="chip">Automation</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="glass"></div>
                    <div className="image-container">
                        {/* <img className="header-image" src="./images/nidhi.png" loading="lazy" alt=""> */}
                    </div>
                    <div className="content">
                        <h4>Scissors · Web App for Salon</h4>
                        <p>
                            Web application for on-demand beauty
services. Connects users with verified beauty
professionals for at-home appointments.
Developed web application for on-demand
beauty services using Larvel
Designed service catalog and booking
engine with flexible scheduling options.
Built user-centric dashboard for service
providers with appointment management.
                        </p>
                        <ul className="chip-container">
                            <li className="chip">Laravel</li>
                            <li className="chip">PHP</li>
                            <li className="chip">MVC</li>
                            <li className="chip">JavaScript</li>
                            <li className="chip">CSS</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ol>
        <div className="resume">
            <a target="_blank" href="./HemendraTripathiResume.pdf">View Full Project Archive <i className="fa-solid fa-arrow-right"></i></a>
        </div>
    </section>
    <Footer/>
    <div className="top-button">
        <a href="#"><i className="fa-solid fa-chevron-up"></i></a>
    </div>
</main>;
}