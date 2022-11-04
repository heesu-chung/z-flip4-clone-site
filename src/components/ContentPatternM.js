import "./ContentPatternM.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import CoverScreen from "../assets/galaxy_cover_screen.jpg";

const ContentPatternM = ({
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
    return (
        <section className="content-m">
            <div className="feature-image">
                {screenX < 1024 && mainImage[0] === "CoverScreen" && (
                    <img
                        src={CoverScreen}
                        style={{ width: `${mainImageSize[0]}px` }}
                        alt="galaxy cover screen"
                    />
                )}
                {screenX >= 1024 && mainImage[0] === "CoverScreen" && (
                    <img
                        src={CoverScreen}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy cover screen"
                    />
                )}
            </div>
            {screenX < 768 && (
                <div className="block feature-content">
                    <ContentTitle title={title} category={category} />
                    <Content content={content} alert={alert} />
                    <Button btnContent={btnContent} />
                    {image && (
                        <ContentImage image={image} imageSize={imageSize} />
                    )}
                </div>
            )}
            {screenX >= 768 && (
                <div className="block feature-content">
                    <ContentTitle title={title} category={category} />

                    <Content content={content} alert={alert} />
                    <Button btnContent={btnContent} />
                    {image && (
                        <ContentImage image={image} imageSize={imageSize} />
                    )}
                </div>
            )}
        </section>
    );
};

export default ContentPatternM;
