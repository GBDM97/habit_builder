import React from "react";

export type ExercisingArgs = {
    handleN: (e:any) => void,
    cToResults: () => void,
    currentC: string,
    hidden: boolean,
}

const Exercising = ({handleN, cToResults, currentC, hidden}:ExercisingArgs) => {
    
    if (hidden) return null;
    else return(
    <React.Fragment>
        <div className="pageInsert">
                <div className="emptyDiv"></div>
                <div className='p1'>&nbsp;Minimum number of minutes that is ok for you to start exercising daily:&nbsp;</div>
                <input onChange={handleN} className="insertNumber" type="number" id="quantity" name="quantity" min="5" max="1000"/>
                <button onClick={cToResults} className= {currentC + " button continue"}>Continue</button>
        </div>
    </React.Fragment>
    )
}

export default Exercising