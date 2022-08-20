import React from "react";

export type MotivArgs = {
    handleM: (e:any) => void,
    cMotiv: () => void,
    currentC: string,
    hidden: boolean,
}

const Motiv = ({handleM, cMotiv, currentC, hidden}:MotivArgs) => {
    
    if (hidden) return null;
    else return(
    <React.Fragment>
        <div className="pageInsert">   
            <div className="emptyDiv"></div>
            <div className="inputTextLabel">My main motivation for having this habit is to...</div>
            <input onChange={handleM} className="inputText" type="text"/>
            <button onClick={cMotiv} className= {currentC + " button continue"}>Continue</button>
        </div>
        
    </React.Fragment>
    )
}

export default Motiv