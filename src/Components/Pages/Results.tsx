import React from "react";
import Animation2 from "../Animations/Animation2";
import Animation3 from "../Animations/Animation3";

export type ResultsArgs = {
    
    currentTask: string,
    current0: number,
    current1: number,
    current2: number,
    current3: number,
    current4: number,
    current5: number,
    current6: number,
    current7: number,
    current8: number,
    current9: number,
    current10: number,
    currentN: number,
    currentM: string, 
    currentMeasure: string, 
    currentV: string, 
    currentSource: string, 
    cToInit: ()=> void,
    hidden: boolean,
}

    const d = new Date();
    let day = d.getMonth();
    let today;
    let D0:string;
    let D1:string;
    let D2:string;
    let D3:string;
    let D4:string;
    let D5:string;
    let D6:string;
    let D7:string;
    let D8:string;
    let D9:string;
    let D10:string;
    
    if (day === 0) {today = "JAN"; D0 = "FEB"; D1 = "MAR"; D2 = "APR"; D3 = "MAY"; D4 = "JUNE"; D5 = "JULY"; D6 = "AUG"; D7 = "SEPT"; D8 = "OCT"; D9 = "NOV"; D10 = "DEC";}
    if (day === 1) {today = "FEB"; D0 = "MAR"; D1 = "APR"; D2 = "MAY"; D3 = "JUNE"; D4 = "JULY"; D5 = "AUG"; D6 = "SEPT"; D7 = "OCT"; D8 = "NOV"; D9 = "DEC"; D10 = "JAN";}
    if (day === 2) {today = "MAR"; D0 = "APR"; D1 = "MAY"; D2 = "JUNE"; D3 = "JULY"; D4 = "AUG"; D5 = "SEPT"; D6 = "OCT"; D7 = "NOV"; D8 = "DEC"; D9 = "JAN"; D10 = "FEB";}
    if (day === 3) {today = "APR"; D0 = "MAY"; D1 = "JUNE"; D2 = "JULY"; D3 = "AUG"; D4 = "SEPT"; D5 = "OCT"; D6 = "NOV"; D7 = "DEC"; D8 = "JAN"; D9 = "FEB"; D10 = "MAR";}
    if (day === 4) {today = "MAY"; D0 = "JUNE"; D1 = "JULY"; D2 = "AUG"; D3 = "SEPT"; D4 = "OCT"; D5 = "NOV"; D6 = "DEC"; D7 = "JAN"; D8 = "FEB"; D9 = "MAR"; D10 = "APR";}
    if (day === 5) {today = "JUNE"; D0 = "JULY"; D1 = "AUG"; D2 = "SEPT"; D3 = "OCT"; D4 = "NOV"; D5 = "DEC"; D6 = "JAN"; D7 = "FEB"; D8 = "MAR"; D9 = "APR"; D10 = "MAY";}
    if (day === 6) {today = "JULY"; D0 = "AUG"; D1 = "SEPT"; D2 = "OCT"; D3 = "NOV"; D4 = "DEC"; D5 = "JAN"; D6 = "FEB"; D7 = "MAR"; D8 = "APR"; D9 = "MAY"; D10 = "JUNE";}
    if (day === 7) {today = "AUG"; D0 = "SEPT"; D1 = "OCT"; D2 = "NOV"; D3 = "DEC"; D4 = "JAN"; D5 = "FEB"; D6 = "MAR"; D7 = "APR"; D8 = "MAY"; D9 = "JUNE"; D10 = "JULY";}
    if (day === 8) {today = "SEPT"; D0 = "OCT"; D1 = "NOV"; D2 = "DEC"; D3 = "JAN"; D4 = "FEB"; D5 = "MAR"; D6 = "APR"; D7 = "MAY"; D8 = "JUNE"; D9 = "JULY"; D10 = "AUG";}
    if (day === 9) {today = "OCT"; D0 = "NOV"; D1 = "DEC"; D2 = "JAN"; D3 = "FEB"; D4 = "MAR"; D5 = "APR"; D6 = "MAY"; D7 = "JUNE"; D8 = "JULY"; D9 = "AUG"; D10 = "SEPT";}
    if (day === 10) {today = "NOV"; D0 = "DEC"; D1 = "JAN"; D2 = "FEB"; D3 = "MAR"; D4 = "APR"; D5 = "MAY"; D6 = "JUNE"; D7 = "JULY"; D8 = "AUG"; D9 = "SEPT"; D10 = "OCT";}
    if (day === 11) {today = "DEC"; D0 = "JAN"; D1 = "FEB"; D2 = "MAR"; D3 = "APR"; D4 = "MAY"; D5 = "JUNE"; D6 = "JULY"; D7 = "AUG"; D8 = "SEPT"; D9 = "OCT"; D10 = "DEC";}


const Results = ({currentTask,
    current0, current1, current2, current3, current4, current5, current6, current7, current8, current9, current10, currentM, currentMeasure, currentV, currentSource, cToInit, hidden}:ResultsArgs) => {

    if (hidden) return null;
    else return(
    <React.Fragment>
        <div className="rPage">
                            <div className="titleContainer">
                                <p className="titleOut">Follow the {currentV} plan:</p>
                                <p className="smallP">Start your plan tommorow. But don't worry! you can always go back to the 
                                beginning if you don't feel like advancing in your new habit yet.</p>
                            </div> 
                        <div className="rowContainer">  
                                <div className="weekContainer">
                                    <p className='titleW'>{D0}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current0}</p>
                                    </div>
                                </div>  
                                <div className="weekContainer">
                                    <p className='titleW'>{D1}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current1}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D2}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current2}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D3}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current3}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D4}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current4}</p>
                                    </div>
                                </div>
                                
                                <div className="weekContainer">
                                    <p className='titleW'>{D5}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current5}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D6}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current6}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D7}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current7}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D8}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current8}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D9}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current9}</p>
                                    </div>
                                </div>
                                <div className="weekContainer">
                                    <p className='titleW'>{D10}</p>
                                    <div className="rowContainer">
                                        <p className="smallP">{currentTask}&nbsp;</p><p className="number">{current10}</p>
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
                    <p className="motiv">{Math.ceil(currentMeasure === "hours" ? current0 * 31 / 60 : current0 * 31)} {currentMeasure}</p>

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