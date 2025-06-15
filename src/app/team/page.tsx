import Header from "@components/semantic/header/header.component";
import Footer from "@components/semantic/footer/footer.component";
import TeamComponent from "@components/page/team/team.component";

export default function Home() {

    return (
        <>
            <Header before={"practical"} after={"contect"} />
            <TeamComponent />
            <Footer />
        </>
    )
}