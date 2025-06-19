import Header from "@components/semantic/header/header.component";
import Footer from "@components/semantic/footer/footer.component";
import ContactComponent from "@components/page/contact/contact.component";

export default function Home() {

    return (
        <>
            <Header before={"practical"} after={"contact"} />
            <ContactComponent />
            <Footer />
        </>
    )
}