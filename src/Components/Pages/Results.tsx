import React from "react";
import Animation2 from "../Animations/Animation2";
import Animation3 from "../Animations/Animation3";

export type ResultsArgs = {
    
    currentTask: string,
    currentN: number, 
    currentM: string, 
    currentMeasure: string, 
    currentV: string, 
    currentSource: string, 
    cToInit: ()=> void,
    hidden: boolean,
}

    const d = new Date();
    let day = d.getDay();
    let today;
    let D0:string;
    let D1:string;
    let D2:string;
    let D3:string;
    let D4:string;
    let D5:string;
    let D6:string;
    if (day === 0) {today = "S"; D0 = "M"; D1 = "T"; D2 = "W"; D3 = "T"; D4 = "F"; D5 = "S"; D6 = "S";}
    if (day === 1) {today = "M"; D0 = "T"; D1 = "W"; D2 = "T"; D3 = "F"; D4 = "S"; D5 = "S"; D6 = "M";}
    if (day === 2) {today = "T"; D0 = "W"; D1 = "T"; D2 = "F"; D3 = "S"; D4 = "S"; D5 = "M"; D6 = "T";}
    if (day === 3) {today = "W"; D0 = "T"; D1 = "F"; D2 = "S"; D3 = "S"; D4 = "M"; D5 = "T"; D6 = "W";}
    if (day === 4) {today = "T"; D0 = "F"; D1 = "S"; D2 = "S"; D3 = "M"; D4 = "T"; D5 = "W"; D6 = "T";}
    if (day === 5) {today = "F"; D0 = "S"; D1 = "S"; D2 = "M"; D3 = "T"; D4 = "W"; D5 = "T"; D6 = "F";}
    if (day === 6) {today = "S"; D0 = "S"; D1 = "M"; D2 = "T"; D3 = "W"; D4 = "T"; D5 = "F"; D6 = "S";}

const Results = ({currentTask,
    currentN, currentM, currentMeasure, currentV, currentSource, cToInit, hidden}:ResultsArgs) => {
    
    if (hidden) return null;
    else return(
    <React.Fragment>
        <div className="rPage">
                            <div className="titleContainer">
                                <p className="titleOut">Follow the {currentV} plan:</p>
                                <p className="smallP">Start your plan tommorow. But don't worry! you can always go back to the 
                                beggining if you don't feel like advancing in your new habit yet.</p>
                            </div> 
                        <div className="rowContainer">  
                                <div className="weekContainer">
                                    <p className='titleW'>{D0}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN}</p>
                                    </div>
                                </div>  
                                <div className="weekContainer">
                                    <p className='titleW'>{D1}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN * 2}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D2}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN * 3}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D3}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN * 4}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D4}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN * 5}</p>
                                    </div>
                                </div>
                                
                                <div className="weekContainer">
                                    <p className='titleW'>{D5}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN * 6}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D6}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{currentN * 7}</p>
                                    </div>
                                </div>
                        </div> 
                    
                    
                    <Animation2/>
                    <p className="titleOut">Remember to activate a daily alarm:</p>
                    <p className="smallP">Activate a daily alarm at the time 
                    of your choice,<br></br> and put the label to remember your main motivation for 
                    doing this habit, for example:</p>
                    <p className="motiv">"Let's {currentV} to {currentM}"</p>

                    <Animation3/>
                    <p className="titleOut">The earlier you start the better</p>
                    <p className="smallP">If you start following this plan for at least
                    one month, at the end of it you will {currentV}:</p>
                    <p className="motiv">{Math.ceil(currentMeasure === "hours" ? currentN * 217 / 60 : currentN * 217)} {currentMeasure}</p>

                    <img className="Img space" src={currentSource}
                    alt="Chosen habit"></img>
                    
                    <p className="titleOut">Pay attention to your feelings:</p>
                    <p className="smallP">As mentioned in the first step, you can always reduce the <br></br> length of time 
                    spent in your new habit depending on how <br></br>you feel. But if you have plausible reasons for 
                    implementing <br></br> this habit into your life, don't give up to do even the <br></br> minimum daily 
                    effort for it.</p>

                    <p className="motiv space button" onClick={cToInit}>Back to start &gt;</p>
                    
                    <div className="emptyR"><br></br> <br></br> <br></br></div>
                    
                    </div>
    </React.Fragment>
    )
}

export default Results