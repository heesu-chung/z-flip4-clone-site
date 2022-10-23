import "./ContentPatternN.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import GalaxyWatch from "../assets/galaxy_watch.jpg";
import TitleDesign from "./TitleDesign";
import ContentBetterTogether from "./contents/ContentBetterTogether";

const ContentPatternN = ({
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
        <section className="content-n">
            <div className="feature-image">
                {screenX < 1024 && mainImage[0] === "GalaxyWatch" && (
                    <img
                        src={GalaxyWatch}
                        style={{ width: `${mainImageSize[0]}px` }}
                        alt="GalaxyWatch"
                    />
                )}
                {screenX >= 1024 && mainImage[0] === "GalaxyWatch" && (
                    <img
                        src={GalaxyWatch}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="GalaxyWatch"
                    />
                )}
            </div>

            <div className="block feature-content feature-menu">
                <div className="feature feature-title">
                    <ContentTitle
                        title={title}
                        category={category}
                        align={align}
                    />
                </div>
                <div className="feature feature-others">
                    <Content content={content} alert={alert} />
                    <Button btnContent={btnContent} />
                    {image && (
                        <ContentImage
                            image={image}
                            imageSize={imageSize}
                            className="sub-image"
                        />
                    )}
                    <ContentBetterTogether
                        title="Galaxy Watch5"
                        image="SubWatch"
                        imageSize={[160, 168]}
                        desc="for sleep tracking"
                        link="Go to Galaxy Watch5"
                        screenX={screenX}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContentPatternN;
