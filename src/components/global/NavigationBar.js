import { useEffect, useState } from "react";
import "./NavigationBar.scss";

const NavigationBar = ({ number, title, active }) => {
    const screenX = window.innerWidth;

    const navigation = [
        2590, 5970, 10390, 18070, 22800, 3560, 7730, 12630, 24360, 29560,
    ];

    const navBlock = document.querySelector(".navigation-block");

    useEffect(() => {
        if (screenX < 1024 && navBlock) {
            if (active) {
                navBlock.style.height = "202px";
                navBlock.style.opacity = "1";
            } else if (!active) {
                navBlock.style.height = "0px";
                navBlock.style.opacity = "0";
            }
        } else if (screenX >= 1024 && navBlock) {
            if (active) {
                navBlock.style.height = "222px";
                navBlock.style.opacity = "1";
            } else if (!active) {
                navBlock.style.height = "0px";
                navBlock.style.opacity = "0";
            }
        }
    }, [active]);

    const onClick = (e) => {
        switch (e) {
            case 1:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[0],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[5],
                          behavior: "smooth",
                      });
                return;
            case 2:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[1],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[6],
                          behavior: "smooth",
                      });
                return;
            case 3:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[2],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[7],
                          behavior: "smooth",
                      });
                return;
            case 4:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[3],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[8],
                          behavior: "smooth",
                      });
                return;
            case 5:
                screenX < 1024
                    ? window.scrollTo({
                          top: navigation[4],
                          behavior: "smooth",
                      })
                    : window.scrollTo({
                          top: navigation[9],
                          behavior: "smooth",
                      });
                return;
            default:
                return;
        }
    };

    return (
        <>
            <div className="navigation-block">
                <div className="nav-contents">
                    <ul className="o-nav">
                        {title === "DESIGN" && (
                            <li
                                className="nav-design"
                                style={{ opacity: "1" }}
                                onClick={() => onClick(1)}
                            >
                                DESIGN
                            </li>
                        )}
                        {title !== "DESIGN" && (
                            <li
                                className="nav-design"
                                style={{ opacity: "0.6" }}
                                onClick={() => onClick(1)}
                            >
                                DESIGN
                            </li>
                        )}
                        {title === "DURABILITY" && (
                            <li
                                className="nav-durability"
                                style={{ opacity: "1" }}
                                onClick={() => onClick(2)}
                            >
                                DURABILITY
                            </li>
                        )}
                        {title !== "DURABILITY" && (
                            <li
                                className="nav-durability"
                                style={{ opacity: "0.6" }}
                                onClick={() => onClick(2)}
                            >
                                DURABILITY
                            </li>
                        )}
                        {title === "CAMERA" && (
                            <li
                                className="nav-camera"
                                style={{ opacity: "1" }}
                                onClick={() => onClick(3)}
                            >
                                CAMERA
                            </li>
                        )}
                        {title !== "CAMERA" && (
                            <li
                                className="nav-camera"
                                style={{ opacity: "0.6" }}
                                onClick={() => onClick(3)}
                            >
                                CAMERA
                            </li>
                        )}
                        {title === "BATTERY" && (
                            <li
                                className="nav-battery"
                                style={{ opacity: "1" }}
                                onClick={() => onClick(4)}
                            >
                                BATTERY
                            </li>
                        )}
                        {title !== "BATTERY" && (
                            <li
                                className="nav-battery"
                                style={{ opacity: "0.6" }}
                                onClick={() => onClick(4)}
                            >
                                BATTERY
                            </li>
                        )}
                        {title === "ECOSYSTEM" && (
                            <li
                                className="nav-ecosystem"
                                style={{ opacity: "1" }}
                                onClick={() => onClick(5)}
                            >
                                ECOSYSTEM
                            </li>
                        )}
                        {title !== "ECOSYSTEM" && (
                            <li
                                className="nav-ecosystem"
                                style={{ opacity: "0.6" }}
                                onClick={() => onClick(5)}
                            >
                                ECOSYSTEM
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;
