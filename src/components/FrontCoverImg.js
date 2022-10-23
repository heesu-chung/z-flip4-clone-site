import CoverImg from "../assets/z-flip-cover.jpg";
import "./FrontCoverImg.scss";

const FrontCoverImg = () => {
    return (
        <section className="cover-wrapper">
            <h1>Galaxy Z Flip4</h1>
            <div className="img-wrapper">
                <img src={CoverImg} alt="z-flip4 view" />
            </div>
        </section>
    );
};

export default FrontCoverImg;
