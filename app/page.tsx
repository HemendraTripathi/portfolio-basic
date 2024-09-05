'use client';
import PreLoader from "@/app/ui/pre-loader/pre-loader";
import Header from "@/app/ui/header/header";
import Main from "@/app/ui/main/main";
import { useEffect } from "react";

export default function Page(){

  useEffect(() => {
    window.onscroll = () => {
      if(scrollY > 125){
          document.getElementsByClassName("top-button")[0].classList.add("show");
          document.getElementsByClassName("top-button")[0].classList.remove("disappear");
      }
      else{
          document.getElementsByClassName("top-button")[0].classList.remove("show");
          document.getElementsByClassName("top-button")[0].classList.add("disappear");
      }
  
      var current  = "";
      const sections = document.getElementsByTagName("section");
      for (let i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].offsetTop;
          if(scrollY >= sectionTop - 120){
              current = sections[i].getAttribute("id")!;
          }
      }
      const navItems = document.getElementsByClassName("nav-item");
      for (let i = 0; i < navItems.length; i++) {
          navItems[i].classList.remove("active");
          // console.log(current)
          if(navItems[i].getAttribute('href')!.includes(current) && current != ""){
              navItems[i].classList.add("active");
          }
      }
  }
  },[]);
  
  return <div className="container">
    <PreLoader/>
    <Header/>
    <Main/>
  </div>;
}