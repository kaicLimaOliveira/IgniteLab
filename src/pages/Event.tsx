import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Siderbar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>();

    const [toggle, setToggle] = useState(false);

    const changeDisplay = () => {
        setToggle(!toggle)
    }

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header toggle={toggle} changeDisplay={changeDisplay} />
            <main className="flex flex-1">
                {toggle ? (
                    <>
                        <div className="flex flex-1 sm:hidden">
                            {slug
                                ? <Video lessonSlug={slug} />
                                : <div className="flex-1" />}
                        </div>

                        <Siderbar />
                    </>
                ) : (
                    <>
                        {slug
                            ? <Video lessonSlug={slug} />
                            : <div className="flex-1" />}

                        <div className="sm:hidden">
                            <Siderbar />
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}