import "./ContentPatternD.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import CustomImage from "../assets/galaxy_custom_image.jpg";

const ContentPatternL = ({
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
        <section className="content-d flex-end">
            {screenX < 1024 && mainImage[0] === "CustomImage" && (
                <div className="feature-image">
                    <img src={CustomImage} alt="galaxy CustomImage" />
                </div>
            )}

            <div className="block feature-content">
                <ContentTitle title={title} category={category} />

                <Content content={content} alert={alert} />
                <Button btnContent={btnContent} />
                {image && <ContentImage image={image} imageSize={imageSize} />}
            </div>

            {screenX >= 1024 && mainImage[0] === "CustomImage" && (
                <div className="feature-image">
                    <img
                        src={CustomImage}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy CustomImage"
                    />
                </div>
            )}
        </section>
    );
};

export default ContentPatternL;
