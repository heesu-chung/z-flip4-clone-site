import "./ContentPatternB.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import FlexCam from "../assets/galaxy_flexcam.jpg";
import FlexCamUpper from "../assets/galaxy_flex_cam.png";

import Flex from "../assets/galaxy_text_1.png";
import Cam from "../assets/galaxy_text_2.png";
import { useRecoilValue } from "recoil";
import { scrollValue } from "../App";
import { useEffect } from "react";

const ContentPatternG = ({
    category,
    title,
    content,
    alert,
    btnContent,
    mainImage,
    mainImageSize,
    image,
    imageSize,
    margin,
}) => {
    const screenX = window.innerWidth;
    const scroll = useRecoilValue(scrollValue);

    const image1 = document.querySelector(".flex-cam-image");
    const flex = document.querySelector(".Flex");
    const cam = document.querySelector(".Cam");

    useEffect(() => {
        if (screenX >= 1024) {
            if (scroll > 17000) {
                if (image1 && flex && cam) {
                    image1.style.transform = `scale(1) translate(0, 0px)`;
                    setTimeout(() => {
                        flex.style.transform = `translate(-230px, -40px)`;
                        cam.style.transform = `translate(260px, 260px)`;
                    }, 200);
                }
            } else {
                if (image1 && flex && cam) {
                    image1.style.transform = `scale(4) translate(0, 150px)`;

                    flex.style.transform = `translate(-230px, -540px)`;
                    cam.style.transform = `translate(260px, 760px)`;
                }
            }
        } else if (screenX < 768) {
            if (scroll > 13100) {
                if (image1 && flex && cam) {
                    image1.style.transform = `scale(1) translate(0, 0px)`;
                    setTimeout(() => {
                        flex.style.transform = `translate(0px, -55px)`;
                        cam.style.transform = `translate(290px, 80px)`;
                    }, 200);
                }
            } else {
                if (image1 && flex && cam) {
                    image1.style.transform = `scale(4) translate(0, 60px)`;

                    flex.style.transform = `translate(0px, -355px)`;
                    cam.style.transform = `translate(290px, 380px)`;
                }
            }
        }
    }, [scroll]);

    return (
        <>
            <div
                className="blank"
                style={{ width: "100%", margin: "0px 0" }}
            ></div>
            <section className="content-b">
                <div className="visual-text">
                    <div className="flex-cam">
                        <span className="Flex">
                            <img src={Flex} alt="" />
                        </span>
                        <span className="Cam">
                            <img src={Cam} alt="" />
                        </span>
                        {screenX < 768 && (
                            <div className="img-container i-1 flex-cam-image">
                                <img
                                    src={FlexCamUpper}
                                    style={{ maxWidth: "256px" }}
                                    alt=""
                                />
                            </div>
                        )}
                        {screenX >= 768 && screenX < 1024 && (
                            <div className="img-container i-1 flex-cam-image">
                                <img
                                    src={FlexCamUpper}
                                    style={{ maxWidth: "457px" }}
                                    alt=""
                                />
                            </div>
                        )}

                        {screenX >= 1024 && (
                            <div className="img-container i-1 flex-cam-image">
                                <img
                                    src={FlexCamUpper}
                                    style={{ maxWidth: "509px" }}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                </div>
                {screenX < 768 && (
                    <div className="block feature-title">
                        <ContentTitle title={title} category={category} />
                    </div>
                )}
                {screenX < 768 && mainImage[0] === "FlexCam" && (
                    <div className="img-container i-2">
                        <img
                            src={FlexCam}
                            style={{ maxWidth: "444px" }}
                            alt=""
                        />
                    </div>
                )}

                <div className="content-block">
                    {screenX >= 768 && (
                        <div className="block feature-title">
                            <ContentTitle title={title} category={category} />
                        </div>
                    )}
                    <div className="block feature-desc">
                        <Content content={content} alert={alert} />
                        <Button btnContent={btnContent} />
                        {image && (
                            <ContentImage image={image} imageSize={imageSize} />
                        )}
                    </div>
                </div>

                {screenX >= 768 &&
                    screenX < 1024 &&
                    mainImage[0] === "FlexCam" && (
                        <div className="img-container i-2">
                            <img
                                src={FlexCam}
                                style={{ maxWidth: "440px" }}
                                alt=""
                            />
                        </div>
                    )}
                {screenX >= 1024 && mainImage[0] === "FlexCam" && (
                    <div className="img-container i-2">
                        <img
                            src={FlexCam}
                            style={{ maxWidth: "600px" }}
                            alt=""
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default ContentPatternG;
