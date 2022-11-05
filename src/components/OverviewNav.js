import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import "./OverviewNav.scss";
const OverviewNav = ({ screenX, navigation }) => {
    const scroll = useRecoilValue(scrollValue);

    const ScrollTo = (e) => {
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
        <div className="overview-nav">
            <ul>
                <li>
                    <span href="" onClick={() => ScrollTo(1)}>
                        DESIGN
                    </span>
                </li>
                <li>
                    <span href="" onClick={() => ScrollTo(2)}>
                        DURABILITY
                    </span>
                </li>
                <li>
                    <span href="" onClick={() => ScrollTo(3)}>
                        CAMERA
                    </span>
                </li>
                <li>
                    <span href="" onClick={() => ScrollTo(4)}>
                        BATTERY
                    </span>
                </li>
                <li>
                    <span href="" onClick={() => ScrollTo(5)}>
                        ECOSYSTEM
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default OverviewNav;
