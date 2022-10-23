import "./ContentPatternO.scss";
import Button from "./contents/Button";

import Content from "./contents/Content";
import ContentImage from "./contents/ContentImage";
import ContentTitle from "./contents/ContentTitle";

import SmartSwitch from "../assets/galaxy_smart_switch.jpg";

const ContentPatternO = ({
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
        <section className="content-o">
            <div className="block feature-content">
                <ContentTitle title={title} category={category} />

                <Content content={content} alert={alert} />
                <Button btnContent={btnContent} />
                {image && <ContentImage image={image} imageSize={imageSize} />}
                <div className="links">
                    <a href="/" className="link">
                        Go to Smart Switch
                    </a>
                </div>
            </div>
            {screenX < 1024 && mainImage[0] === "SmartSwitch" && (
                <div className="feature-image">
                    <img
                        src={SmartSwitch}
                        style={{ width: `${mainImageSize[0]}px` }}
                        alt="galaxy Smart Switch"
                    />
                </div>
            )}
            {screenX >= 1024 && mainImage[0] === "SmartSwitch" && (
                <div className="feature-image">
                    <img
                        src={SmartSwitch}
                        style={{ width: `${mainImageSize[1]}px` }}
                        alt="galaxy Smart Switch"
                    />
                </div>
            )}
        </section>
    );
};

export default ContentPatternO;
