import { Footer } from "../../layout/footer/footer"
import { Header } from "../../layout/header/header"
import { SectionCollectionFemale } from "../../layout/sections/sectionCollectionFemale/sectionCollectionFemale"
import { SectionCollectionMenu } from "../../layout/sections/sectionCollectionMain/sectionCollectionMenu"


export const Catalogo = () =>{

    return(

        <>
        <Header />
        <SectionCollectionMenu />
        <SectionCollectionFemale/>
        <Footer />
        </>
       
    )
}