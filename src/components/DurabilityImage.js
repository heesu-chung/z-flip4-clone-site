import "./DurabilityImage.scss";
import TitleDesign from "./TitleDesign";

import Durability1 from "../assets/galaxy_durability_1.jpg";
import Durability2 from "../assets/galaxy_durability_2.png";
import Durability3 from "../assets/galaxy_durability_3.png";
import Durability4 from "../assets/galaxy_durability_4.png";
import DurabilityBackground from "../assets/galaxy_durability_background.jpg";
import DurabilityWater from "../assets/galaxy_durability_water.png";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";

const imageSize = [445, 608, 274, 385, 293, 324, 253, 400, 200, 420, 485, 866];

const DurabilityImage = ({ screenX }) => {
    let screenImageSize = [];
    const scroll = useRecoilValue(scrollValue);

    if (screenX < 1024) {
        screenImageSize = [100, 274, 293, 253, 200, 300];
    } else if (screenX >= 1024) {
        screenImageSize = [608, 385, 324, 400, 420, 866];
    }

    const image1 = document.querySelector(".d-1");
    const image2 = document.querySelector(".d-2");
    const image3 = document.querySelector(".d-3");
    const image4 = document.querySelector(".d-4");
    const imageBackground = document.querySelector(".d-b");

    const diff = 20;

    useEffect(() => {
        if (screenX >= 1441) {
            if (scroll >= 6200 && scroll < 9200) {
                if (image1) {
                    image1.style.transform = `translate(40vw, ${
                        200 - (scroll - 6200) * 0.05
                    }px)`;
                }
                if (image2) {
                    image2.style.transform = `translate(59vw, ${
                        -140 - (scroll - 6200) * 0.05
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(21vw, ${
                        -1 * (scroll - 6200) * 0.015
                    }px)`;
                }
                if (image4) {
                    image4.style.transform = `translate(38vw, ${
                        350 - (scroll - 6200) * 0.015
                    }px)`;
                }
                if (imageBackground) {
                    imageBackground.style.transform = `translate(47.7vw, ${
                        -460 - (scroll - 6200) * 0.05
                    }px)`;
                }
            }
        } else if (screenX >= 1024 && screenX < 1441) {
            if (scroll >= 6200 && scroll < 9200) {
                if (image1) {
                    image1.style.transform = `translate(75%, ${
                        200 - (scroll - 6200) * 0.05
                    }px)`;
                }
                if (image2) {
                    image2.style.transform = `translate(200%, ${
                        -140 - (scroll - 6200) * 0.05
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(53%, ${
                        -1 * (scroll - 6200) * 0.015
                    }px)`;
                }
                if (image4) {
                    image4.style.transform = `translate(105%, ${
                        350 - (scroll - 6200) * 0.015
                    }px)`;
                }
                if (imageBackground) {
                    imageBackground.style.transform = `translate(136%, ${
                        -460 - (scroll - 6200) * 0.05
                    }px)`;
                }
            }
        } else if (screenX >= 768 && screenX < 1024) {
            if (scroll >= 5700 && scroll < 8100) {
                if (image1) {
                    image1.style.transform = `translate(32vw, ${
                        230 - (scroll - 5700) * 0.05
                    }px)`;
                }
                if (image2) {
                    image2.style.transform = `translate(58vw, ${
                        -190 - (scroll - 5700) * 0.05
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(12vw, ${
                        -1 * (scroll - 5700) * 0.015
                    }px)`;
                }
                if (image4) {
                    image4.style.transform = `translate(30vw, ${
                        320 - (scroll - 5700) * 0.015
                    }px)`;
                }
                if (imageBackground) {
                    imageBackground.style.transform = `translate(49vw, ${
                        -310 - (scroll - 5700) * 0.05
                    }px)`;
                }
            }
        } else if (screenX < 768) {
            if (scroll >= 5000 && scroll < 9200) {
                if (image1) {
                    image1.style.transform = `translate(20px, ${
                        220 - (scroll - 5000) * 0.2
                    }px)`;
                }
                if (image2) {
                    image2.style.transform = `translate(237px, ${
                        -1 * (scroll - 5000) * 0.2
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(-130px, ${
                        -30 - (scroll - 5000) * 0.06
                    }px)`;
                }
                if (image4) {
                    image4.style.transform = `translate(45px, ${
                        300 - (scroll - 5000) * 0.06
                    }px)`;
                }
                if (imageBackground) {
                    imageBackground.style.transform = `translate(120px, ${
                        300 - (scroll - 5000) * 0.2
                    }px)`;
                }
            }
        }
    }, [scroll]);

    return (
        <>
            <div className="durability-image">
                <div className="image-container d-1 dura">
                    <img src={Durability1} alt="" className="durability-1" />
                </div>
                <div className="blank"></div>
                <TitleDesign
                    title="DURABILITY"
                    subTitle="Withstands drips and drops"
                    className="title"
                />
                <div className="image-container d-2">
                    <img src={Durability2} alt="" className="durability-2" />
                </div>
                <div className="image-container d-3">
                    <img src={Durability3} alt="" className="durability-3" />
                </div>
                <div className="image-container d-4">
                    <img src={Durability4} alt="" className="durability-4" />
                </div>
                <div className="image-container background d-b">
                    <img
                        src={DurabilityBackground}
                        alt=""
                        className="durability-background"
                    />
                </div>
                <div className="image-container water d-w">
                    <img
                        src={DurabilityWater}
                        alt=""
                        className="durability-water"
                    />
                </div>
            </div>
        </>
    );
};

export default DurabilityImage;
