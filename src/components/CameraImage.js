import "./CameraImage.scss";

import CameraImage1 from "../assets/galaxy_camera_image.jpg";
import CameraImage2 from "../assets/galaxy_camera_image2.jpg";
import CameraImage3 from "../assets/galaxy_camera_image3.jpg";
import TitleDesign from "./TitleDesign";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect } from "react";

const imageSize = [308, 600, 336, 569, 302, 544];

const CameraImage = ({ screenX }) => {
    let screenImageSize = [];
    const scroll = useRecoilValue(scrollValue);

    if (screenX < 1024) {
        screenImageSize = [308, 336, 302];
    } else if (screenX >= 1024) {
        screenImageSize = [600, 569, 544];
    }

    const image1 = document.querySelector(".image-1");
    const image2 = document.querySelector(".image-2");
    const image3 = document.querySelector(".i-3");

    const title = document.querySelector(".title-container");

    useEffect(() => {
        if (screenX >= 1441) {
            if (scroll >= 11100 && scroll < 15000) {
                if (image1) {
                    image1.style.transform = `scale(0.5)`;
                }
                if (image2) {
                    image2.style.transform = `translate(-18.5vw,-18.5vw)`;
                }
                if (title) {
                    title.style.transform = `translateY(${
                        -50 + (scroll - 11100) * 0.03
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(10.4vw ,${
                        -100 - (scroll - 11100) * 0.06
                    }px)`;
                }
            } else if (scroll < 11100) {
                if (image1) {
                    image1.style.transform = `scale(1)`;
                }
            }
        } else if (screenX >= 1024 && screenX < 1441) {
            if (scroll >= 11100 && scroll < 15000) {
                if (image1) {
                    image1.style.transform = `scale(0.5)`;
                }

                if (title) {
                    title.style.transform = `translateY(${
                        -50 + (scroll - 11100) * 0.03
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(0% ,${
                        -100 - (scroll - 11100) * 0.06
                    }px)`;
                }
            } else if (scroll < 11100) {
                if (image1) {
                    image1.style.transform = `scale(1)`;
                }
            }
        } else if (screenX < 768) {
            if (scroll >= 9450 && scroll < 11500) {
                if (image1) {
                    image1.style.transform = `scale(0.5)`;
                }

                if (title) {
                    title.style.transform = `translateY(${
                        -50 + (scroll - 11100) * 0.03
                    }px)`;
                }
                if (image3) {
                    image3.style.transform = `translate(0% ,${
                        -120 - (scroll - 11100) * 0.2
                    }px)`;
                    image3.style.transition = `.6s all ease`;
                }
            } else if (scroll < 11100) {
                if (image1) {
                    image1.style.transform = `scale(1)`;
                }
            }
        }
    }, [scroll]);

    return (
        <>
            <div className="camera-image-container">
                <div className="image-container i-1">
                    <img src={CameraImage1} alt="" className="image-1" />
                </div>
                <div className="title-container">
                    <TitleDesign
                        title="CAMERA"
                        subTitle="Flex your photo skills"
                    />
                </div>
                <div className="image-container i-2">
                    <img src={CameraImage2} alt="" className="image-2" />
                </div>
                <div className="image-container i-3">
                    <img src={CameraImage3} alt="" className="image-3" />
                </div>
            </div>
        </>
    );
};

export default CameraImage;
