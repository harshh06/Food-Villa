import { useState } from "react";

const Section = ({
    title,
    description,
    isVisible,
    setIsVisible,
    buttonText,
    setButtonText,
    setVisibleSection,
}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h1 className="text-xl">{title}</h1>
            <button
                className="underline"
                onClick={() => {
                    if (isVisible) {
                        setIsVisible(false);
                        setButtonText("Show");
                    } else {
                        setIsVisible(true);
                        setButtonText("Hide");
                    }
                }}>
                {buttonText}
            </button>
            {isVisible === true ? <p>{description}</p> : <p></p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2">Instamart</h1>
            <Section
                title="About"
                description="This is about section of Instamart"
                isVisible={visibleSection === "about"}
                buttonText={visibleSection === "about" ? "Hide" : "Show"}
                setIsVisible={(show) =>
                    show ? setVisibleSection("about") : setVisibleSection("")
                }
                setButtonText={() => {
                    visibleSection === "about" ? "Hide" : "Show";
                }}
            />
            <Section
                title="Team"
                description="This is team section of Instamart"
                isVisible={visibleSection === "team"}
                buttonText={visibleSection === "team" ? "Hide" : "Show"}
                setIsVisible={(show) =>
                    show ? setVisibleSection("team") : setVisibleSection("")
                }
                setButtonText={() => {
                    visibleSection === "team" ? "Hide" : "Show";
                }}
            />
            <Section
                title="Contact"
                description="This is contact section of Instamart"
                isVisible={visibleSection === "contact"}
                buttonText={visibleSection === "contact" ? "Hide" : "Show"}
                setIsVisible={(show) =>
                    show ? setVisibleSection("contact") : setVisibleSection("")
                }
                setButtonText={() => {
                    visibleSection === "contact" ? "Hide" : "Show";
                }}
            />
        </div>
    );
};

export default Instamart;
