import "./ContentPatternJ.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import Battery from "../assets/galaxy_battery.jpg";
import TitleDesign from "./TitleDesign";
import ContentBetterTogether from "./contents/ContentBetterTogether";

const ContentPatternJ = ({
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
    align,
}) => {
    const screenX = window.innerWidth;
    return (
        <section className="content-j">
            <div className="feature-image">
                {screenX < 768 && mainImage[0] === "Battery" && (
                    <img src={Battery} alt="galaxy Battery" />
                )}
                {screenX >= 768 &&
                    screenX < 1024 &&
                    mainImage[0] === "Battery" && (
                        <img
                            src={Battery}
                            style={{ width: `406px` }}
                            alt="galaxy Battery"
                        />
                    )}
                {screenX >= 1024 && mainImage[0] === "Battery" && (
                    <img
                        src={Battery}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy Battery"
                    />
                )}
            </div>

            <div className="block feature-content feature-menu">
                <div className="feature feature-title">
                    <TitleDesign title="BATTERY" className="menu-btn" />
                    <ContentTitle title={title} align={align} />
                </div>
                <div className="feature feature-others">
                    <Content content={content[0]} />
                    <Content content={content[1]} alert={alert} />
                    <Button btnContent={btnContent} />
                    {image && (
                        <ContentImage
                            image={image}
                            imageSize={imageSize}
                            className="sub-image"
                        />
                    )}

                    <ContentBetterTogether
                        title="25W Power Adapter"
                        image="SubBattery"
                        imageSize={[160, 168]}
                        desc="for Super Fast Charging"
                        link="Go to Chargers"
                        screenX={screenX}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContentPatternJ;
