import "./ContentPatternB.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import Fits from "../assets/galaxy_fits.jpg";

const ContentPatternB = ({
    category,
    title,
    content,
    alert,
    btnContent,
    image,
    imageSize,
    margin,
}) => {
    const screenX = window.innerWidth;
    return (
        <section className="content-b">
            {screenX < 768 && (
                <div className="block feature-title">
                    <ContentTitle title={title} category={category} />
                </div>
            )}
            {screenX < 768 && image[0] === "Fits" && (
                <div className="img-container">
                    <img src={Fits} style={{ maxWidth: "444px" }} alt="" />
                </div>
            )}
            {screenX >= 768 && image[0] === "Fits" && (
                <div className="img-container">
                    <img src={Fits} alt="" style={{ maxWidth: "948px" }} />
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
        </section>
    );
};

export default ContentPatternB;
