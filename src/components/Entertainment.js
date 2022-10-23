import "./Entertainment.scss";

import Face1 from "../assets/galaxy_face_1.png";
import Face2 from "../assets/galaxy_face_2.png";
import Face3 from "../assets/galaxy_face_3.png";
import Face4 from "../assets/galaxy_face_4.png";

const Entertainment = () => {
    return (
        <section className="entertainment">
            <img src={Face1} alt="" className="enter-img e1" />
            <img src={Face2} alt="" className="enter-img e2" />
            <img src={Face3} alt="" className="enter-img e3" />
            <img src={Face4} alt="" className="enter-img e4" />
            <article className="entertain-container">
                <div className="contents">
                    <p className="cate">ENTERTAINMENT</p>
                    <p className="feature-title">Call up the fam</p>
                </div>
            </article>
        </section>
    );
};

export default Entertainment;
