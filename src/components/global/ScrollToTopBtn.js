import "./ScrollToTopBtn.scss";
import Arrow from "../../assets/scroll_arrow.png";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { scrollValue } from "../../App";

const ScrollToTopBtn = () => {
    const [active, setActive] = useState(false);

    const screenX = window.innerWidth;
    const scroll = useRecoilValue(scrollValue);

    const container = document.querySelector(".global-scroll-btn");
    const arrow = document.querySelector(".arrow");

    const onClick = (e) => {
        if (screenX < 1024) {
            active
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : window.scrollTo({ top: 750, behavior: "smooth" });
        } else if (screenX >= 1024) {
            active
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : window.scrollTo({ top: 996, behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (screenX < 1024 && container && arrow) {
            arrow.style.transition = `.3s all ease`;
            container.style.transition = `.3s all ease`;
            if (scroll < 150 && active) {
                setActive(false);

                arrow.style.transform = `rotate(185deg)`;
                setTimeout(() => {
                    container.style.transform = `translate(0, -0.3vh)`;
                }, 200);
                setTimeout(() => {
                    container.style.transform = `translate(0, 0)`;
                    arrow.style.transform = `rotate(180deg)`;
                }, 400);
            } else if (scroll >= 150 && !active) {
                setActive(true);

                container.style.transform = `translate(0, 4.3vh)`;
                setTimeout(() => {
                    arrow.style.transform = `rotate(-5deg)`;
                }, 200);
                setTimeout(() => {
                    container.style.transform = `translate(0, 4vh)`;
                    arrow.style.transform = `rotate(0deg)`;
                }, 300);
            }
        } else if (screenX >= 1024 && container && arrow) {
            arrow.style.transition = `.3s all ease`;
            container.style.transition = `.3s all ease`;
            container.style.transform = `translate(0, 0)`;
            if (scroll < 400 && active) {
                setActive(false);

                arrow.style.transform = `rotate(185deg)`;
                setTimeout(() => {
                    arrow.style.transform = `rotate(180deg)`;
                }, 400);
            } else if (scroll >= 400 && !active) {
                setActive(true);

                arrow.style.transform = `rotate(-5deg)`;
                setTimeout(() => {
                    arrow.style.transform = `rotate(0deg)`;
                }, 300);
            }
        }
    }, [scroll, screenX]);
    return (
        <div className="global-scroll-btn" onClick={onClick}>
            <div className="scroll-btn-container">
                <img src={Arrow} className="arrow" alt="" />
            </div>
        </div>
    );
};

export default ScrollToTopBtn;
