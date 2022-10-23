import "./Content.scss";

const Content = ({ content, alert }) => {
    return (
        <div className="contents">
            <p className="content">{content}</p>
            {alert && (
                <p className="alert">
                    *Image simulated for illustrative purposes. Actual UI may be
                    different.
                </p>
            )}
        </div>
    );
};

export default Content;
