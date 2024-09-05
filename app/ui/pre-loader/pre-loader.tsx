'use client';
import { useEffect } from "react";

export default function PreLoader() {

    useEffect(() => {
        document.getElementsByClassName("pre-loader")[0].classList.add("fadeOut");
        document.querySelector(".pre-loader span")?.classList.add("fadeOutText");
        document.querySelector(".pre-loader h1")?.classList.add("fadeOutText");
        setInterval(() => {
            document.getElementsByTagName("header")[0].classList.add("fadeIn");
            document.getElementsByTagName("main")[0].classList.add("fadeIn");   
        },3000);
    },[]);

    return <div className="pre-loader">
                <h1>Hemendra Tripathi</h1>
                <span>Portfolio</span>
            </div>;
}