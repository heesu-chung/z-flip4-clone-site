import React, { useEffect } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const scrollValue = atom({
    key: "scrollValue",
    default: 0,
});

const ScrollChecker = () => {
    return <span className="scroll-rate">{}</span>;
};

export default ScrollChecker;
