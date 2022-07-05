import { Header } from "../components/Header";
import { Siderbar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <Siderbar />
            </main>
        </div>
    )
}