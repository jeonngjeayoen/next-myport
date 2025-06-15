import Header from "@components/semantic/header/header.component";
import Footer from "@components/semantic/footer/footer.component";
import PracticalComponent from "@components/page/single/single.component";

export default function Home() {

    return (
        <>
            <Header before={"profile"} after={"team"} />
            <PracticalComponent />
            <Footer />
        </>
    )
}