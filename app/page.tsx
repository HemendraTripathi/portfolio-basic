import PreLoader from "@/app/ui/pre-loader/pre-loader";
import Header from "@/app/ui/header/header";
import Main from "@/app/ui/main/main";

export default function Page(){
  return <div className="container">
    <PreLoader/>
    <Header/>
    <Main/>
  </div>;
}