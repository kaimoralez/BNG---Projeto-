import { Footer } from "../../layout/footer/footer"
import { Header } from "../../layout/header/header"
import { MainHome } from "../../layout/mainHome/mainHome"

import { SectionHomeAboutPreview } from "../../layout/sections/sectionHomeAboutPreview/sectionHomeAboutPreview"
import { SectionHomeCollection } from "../../layout/sections/sectionHomeCollection/sectionHomeColletion"
import { SectionHomeEcobag } from "../../layout/sections/sectionHomeEcobag/sectionHomeEcobag"
import { SectionHomeLocation } from "../../layout/sections/sectionHomeLocation/sectionHomeLocation"


export const Home = () =>{
    return(
        <>
            <Header/>
            <MainHome/>
            <SectionHomeCollection/>
            <SectionHomeEcobag/>
            <SectionHomeAboutPreview/>
            <SectionHomeLocation/>
            <Footer/>
            
        </>
       
    )
}