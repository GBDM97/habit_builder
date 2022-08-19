import "./Anim.css";
import React from "react";

function Animation3(){

const [cNum, setNum] = React.useState(1);

const timer = () => {
    setTimeout(change, 1000)
}

const change = () => {
    setNum(cNum + 1);
    cNum === 31 && setNum(1)
}

timer();

    return(
    <div className="Container">
            <div className="ring1"></div>
            <div className="ring2"></div>
            <div className="calendar">
                <div className="up"></div>
                <div className="numberC">{cNum}</div>
            </div>
    </div>
    )
}

export default Animation3