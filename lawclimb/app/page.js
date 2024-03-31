import Image from "next/image";
import  "./page.module.css";
import Header from "./components/common/Header"
import { Carousell } from "./components/layout/Carousell";
import { Services } from "./components/layout/Services";
import { About } from "./components/layout/About";
import { Features } from "./components/layout/Features";
import { Chatbot } from "./components/layout/Chatbot";
import { Teams } from "./components/layout/Teams";
import { Footer } from "./components/common/Footer";


export default function Home() {
  return (
    <>
    
   


     <Header/>
     <Carousell/>
     <About/>
     <Services/>
     <Features/>
     {/* <Chatbot/> */}
     <Teams/>
     <Footer/>
      
    </>
  );
}
