import "./ContentPatternP.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import Acce from "../assets/galaxy_accessories.jpg";

const ContentPatternP = ({
    category,
    title,
    content,
    alert,
    btnContent,
    image,
    imageSize,
    mainImage,
    mainImageSize,

    flex,
}) => {
    const screenX = window.innerWidth;
    return (
        <section className="content-p">
            <div className="block feature-title">
                <ContentTitle title={title} category={category} />
                {flex && <Button btnContent={btnContent} />}
            </div>
            <div className="block feature-desc">
                <Content content={content} alert={alert} />
                {!flex && <Button btnContent={btnContent} />}
                {image && <ContentImage image={image} imageSize={imageSize} />}
            </div>

            {screenX < 1024 && mainImage[0] === "Accessories" && (
                <div className="feature-image">
                    <img
                        src={Acce}
                        style={{ width: `100%` }}
                        alt="galaxy accessories"
                    />
                </div>
            )}
            {screenX >= 1024 && mainImage[0] === "Accessories" && (
                <div className="feature-image">
                    <img
                        src={Acce}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy accessories"
                    />
                </div>
            )}
        </section>
    );
};

export default ContentPatternP;
