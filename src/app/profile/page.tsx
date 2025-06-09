import Header from "@components/semantic/header/header.component";
import PofileComponent from "@components/page/profile/profile.component";

export default function Home() {

    return (
        <>
            <Header before={"contect"} after={"single"} />
            <PofileComponent />
        </>
    )
}