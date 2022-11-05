/* styles */
import "./Button.scss";

const Button = ({ btnContent, navigation, screenX }) => {
    const onMouseOver = () => {};
    const onNavigate = (e) => {
        switch (e) {
            case 1:
                if (screenX < 768) {
                    window.scrollTo({
                        top: navigation[0],
                        behavior: "smooth",
                    });
                } else if (screenX >= 768 && screenX < 1024) {
                    window.scrollTo({
                        top: navigation[10],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: navigation[5],
                        behavior: "smooth",
                    });
                }
                return;
            case 2:
                if (screenX < 768) {
                    window.scrollTo({
                        top: navigation[1],
                        behavior: "smooth",
                    });
                } else if (screenX >= 768 && screenX < 1024) {
                    window.scrollTo({
                        top: navigation[11],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: navigation[6],
                        behavior: "smooth",
                    });
                }
                return;
            case 3:
                if (screenX < 768) {
                    window.scrollTo({
                        top: navigation[2],
                        behavior: "smooth",
                    });
                } else if (screenX >= 768 && screenX < 1024) {
                    window.scrollTo({
                        top: navigation[12],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: navigation[7],
                        behavior: "smooth",
                    });
                }
                return;
            case 4:
                if (screenX < 768) {
                    window.scrollTo({
                        top: navigation[3],
                        behavior: "smooth",
                    });
                } else if (screenX >= 768 && screenX < 1024) {
                    window.scrollTo({
                        top: navigation[13],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: navigation[8],
                        behavior: "smooth",
                    });
                }
                return;
            case 5:
                if (screenX < 768) {
                    window.scrollTo({
                        top: navigation[4],
                        behavior: "smooth",
                    });
                } else if (screenX >= 768 && screenX < 1024) {
                    window.scrollTo({
                        top: navigation[14],
                        behavior: "smooth",
                    });
                } else {
                    window.scrollTo({
                        top: navigation[9],
                        behavior: "smooth",
                    });
                }
                return;
            default:
                return;
        }
    };

    return (
        <>
            {btnContent === "SeeIn360" && (
                <button className="btn" onMouseOver={() => onMouseOver()}>
                    <span className="content">
                        <span className="btn-slider" />
                        See in 360˚
                    </span>
                </button>
            )}
            {btnContent === "CheckItOut" && (
                <button className="btn" onMouseOver={() => onMouseOver()}>
                    <span className="content">
                        <span className="btn-slider" />
                        Check It Out
                    </span>
                </button>
            )}
            {btnContent === "LearnMore" && (
                <button className="btn" onMouseOver={() => onMouseOver()}>
                    <span className="content">
                        <span className="btn-slider" />
                        Learn More
                    </span>
                </button>
            )}
            {btnContent === "GoToGalaxyZFold4" && (
                <button className="btn">
                    <span className="content">
                        <span className="btn-slider" />
                        GO TO GALAXY Z FOLD4
                    </span>
                </button>
            )}
            {btnContent === "ExploreMore" && (
                <button className="btn" onMouseOver={() => onMouseOver()}>
                    <span className="content">
                        <span className="btn-slider" />
                        Explore More
                    </span>
                </button>
            )}
            {btnContent === "GoToColors" && (
                <button className="btn" onClick={() => onNavigate(1)}>
                    <span className="content">
                        <span className="btn-slider" />
                        Go To Colors
                    </span>
                </button>
            )}
            {btnContent === "GoToCamera" && (
                <button className="btn" onClick={() => onNavigate(2)}>
                    <span className="content">
                        <span className="btn-slider" />
                        Go To Camera
                    </span>
                </button>
            )}
            {btnContent === "GoToBattery" && (
                <button className="btn" onClick={() => onNavigate(3)}>
                    <span className="content">
                        <span className="btn-slider" />
                        Go To Battery
                    </span>
                </button>
            )}
            {btnContent === "GoToCustomCoverScreen" && (
                <button className="btn" onClick={() => onNavigate(4)}>
                    <span className="content">
                        <span className="btn-slider" />
                        Go To Custom Cover Screen
                    </span>
                </button>
            )}
            {btnContent === "GoToDurability" && (
                <button className="btn" onClick={() => onNavigate(5)}>
                    <span className="content">
                        <span className="btn-slider" />
                        Go To Durability
                    </span>
                </button>
            )}
        </>
    );
};

export default Button;
