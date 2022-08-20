import React from "react";

export type ReadingArgs = {
    handleN: (e:any) => void,
    cToResults: () => void,
    currentC: string,
    hidden: boolean,
}

const Reading = ({handleN, cToResults, currentC, hidden}:ReadingArgs) => {
    
    if (hidden) return null;
    else return(
    <React.Fragment>
        <div className="pageInsert">
                <div className="emptyDiv"></div>
                <div className='p1'>&nbsp;Minimum number of pages that is ok for you to start reading daily:&nbsp;</div>
                <input onChange={handleN} className="insertNumber" type="number" id="quantity" name="quantity" min="1" max="1000"/>
                <button onClick={cToResults} className= {currentC + " button continue"}>Continue</button>
        </div>
    </React.Fragment>
    )
}

export default Reading