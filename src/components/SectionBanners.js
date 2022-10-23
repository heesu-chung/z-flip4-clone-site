import "./SectionBanners.scss";
import JumpTitle from "./banners/JumpTitle";
import BannerTitle from "./banners/BannerTitle";

const SectionBanners = ({ screenX }) => {
    return (
        <section className="banners">
            <article>
                <div className="list-item">
                    <div className="sect">
                        <JumpTitle
                            title="HIGHLIGHS"
                            image="Banner1"
                            background="black"
                        />
                        <JumpTitle title="SHOWROOM" image="Banner2" />
                    </div>
                    <div className="sect">
                        <JumpTitle title="ACCESSORIES" image="Banner3" />
                        <JumpTitle title="SPECS" image="Banner4" />
                    </div>
                </div>
                <div className="intro">
                    <BannerTitle
                        title={["Galaxy Z Fold4"]}
                        button="GoToGalaxyZFold4"
                        image="Banner1"
                        imageSize={[470]}
                        screenX={screenX}
                        height={100}
                        style={{
                            background: "white",
                        }}
                        margin={12.5}
                    />
                    <BannerTitle
                        title={["Make the", "Smart Switch"]}
                        button="ExploreMore"
                        image="Banner2"
                        imageSize={[470]}
                        screenX={screenX}
                        height={93}
                        style={{
                            background: "white",
                        }}
                        margin={18}
                    />
                    <BannerTitle
                        title={["See Galaxy", "Z Flip4 in AR"]}
                        image="Banner3"
                        imageSize={[470]}
                        screenX={screenX}
                        height={105}
                        background="black"
                        color="white"
                        fontSize={[34]}
                        margin={2.8}
                    />
                    <BannerTitle
                        category="WHY GALAXY"
                        title={["Your Galaxy.", "Your way."]}
                        desc="Galaxy devices give you more ways to connect and the freedom to make your experience exactly how you want it."
                        button="ExploreMore"
                        image="Banner4"
                        imageSize={[470]}
                        color="white"
                        screenX={screenX}
                        margin={0}
                    />
                </div>
            </article>
        </section>
    );
};

export default SectionBanners;
