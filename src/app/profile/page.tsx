import Header from "@components/semantic/header/header.component";
import Footer from "@components/semantic/footer/footer.component";
import ProfileComponent from "@components/page/profile/profile.component";

export default function Home() {

    return (
        <>
            <Header before={"contact"} after={"practical"} />
            <ProfileComponent />
            <Footer />
        </>
    )
}