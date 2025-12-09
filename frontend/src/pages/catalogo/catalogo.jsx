import { Footer } from "../../layout/footer/footer"
import { Header } from "../../layout/header/header"
import { SectionCollectionEcobag } from "../../layout/sections/sectionCollectionEcobag/sectionCollectionEcobag"
import { SectionCollectionFemale } from "../../layout/sections/sectionCollectionFemale/sectionCollectionFemale"
import { SectionCollectionKids } from "../../layout/sections/sectionCollectionKids/sectionCollectionKids"
import { SectionCollectionMenu } from "../../layout/sections/sectionCollectionMain/sectionCollectionMenu"
import { SectionCollectionMale } from "../../layout/sections/sectionCollectionMale/sectionCollectionMale"


export const Catalogo = () =>{

    return(

        <>
        <Header />
        <SectionCollectionMenu />
        <SectionCollectionFemale/>
        <SectionCollectionMale/>
        <SectionCollectionKids />
        <SectionCollectionEcobag/>
        <Footer />
        </>
       
    )
}