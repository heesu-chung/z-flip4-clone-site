import "./ContentPatternE.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import IPX8 from "../assets/galaxy_ipx8.jpg";

const ContentPatternE = ({
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
        <section className="content-e">
            {screenX < 1024 && (
                <div className="block feature-content">
                    <ContentTitle title={title} category={category} />
                    <Content content={content} alert={alert} />
                    <Button btnContent={btnContent} />
                    {image && (
                        <ContentImage image={image} imageSize={imageSize} />
                    )}
                </div>
            )}
            <div className="feature-image">
                {screenX < 1024 && mainImage[0] === "IPX8" && (
                    <img
                        src={IPX8}
                        style={{ width: `${mainImageSize[0]}px` }}
                        alt="galaxy exterior"
                    />
                )}
                {screenX >= 1024 && mainImage[0] === "IPX8" && (
                    <img
                        src={IPX8}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy exterior"
                    />
                )}
            </div>
            {screenX >= 1024 && (
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

export default ContentPatternE;
