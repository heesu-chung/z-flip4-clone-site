import "./Quote.scss";

const Quote = () => {
    return (
        <section className="quote">
            <div className="about-wrap">
                <ul>
                    <li>
                        <div className="box-text">
                            <p className="device"></p>
                            <p className="text">
                                "...the Galaxy Z Flip4 is the best in its
                                class."
                            </p>
                            <strong className="sub-text">Digital Trends</strong>
                            <strong className="author">Joe Maring</strong>
                        </div>
                        <p className="quote-notice">
                            From Digital Trends. © 2022 Digital Trends Media
                            Group. All rights reserved. Used under license.
                        </p>
                    </li>
                    <li>
                        <div className="box-text">
                            <p className="device">
                                Samsung Galaxy
                                <br />Z Fold4 and Z Flip4
                            </p>
                            <p className="text">
                                "Foldable devices are about to be not just a
                                thing, but THE thing"
                            </p>
                            <strong className="sub-text">TechRadar</strong>
                            <strong className="author">08/2022</strong>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Quote;
