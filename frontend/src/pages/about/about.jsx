import { Footer } from "../../layout/footer/footer"
import { Header } from "../../layout/header/header"
import { SectionAboutHistory } from "../../layout/sections/sectionAboutHistory/sectionAboutHistory"
import { SectionAboutMain } from "../../layout/sections/sectionAboutMain/sectionAboutMain"


export const About = () =>{

    return(

        <>
        <Header />
        <SectionAboutMain />
        <SectionAboutHistory />
        <Footer />
        </>
       
    )
}