import { setMaxListeners } from 'events';
import React from 'react';
import { JsxElement, setSourceMapRange } from 'typescript';
import Animation2 from '../Animations/Animation2';
import Animation3 from '../Animations/Animation3';
export type Page = {
    Page:JsxElement
}

function Page() {
    const [currentP, setP] = React.useState("Init");//mano muda aqui dps
    const [currentC, setC] = React.useState("p0");
    const [currentOp, setOp] = React.useState("Hello");
    const [currentV, setV] = React.useState("");
    const [currentN, setN] = React.useState(0);
    const [currentM, setM] = React.useState("");
    const [currentTask, setTask] = React.useState("Pages you will read on this day:");
    const [currentFirst, setFirst] = React.useState(false);
    const [currentSource, setSource] = React.useState("");
    const [currentMeasure, setMeasure] = React.useState("");
    const d = new Date();
    let day = d.getDay();
    let today;
    let D0;
    let D1;
    let D2;
    let D3;
    let D4;
    let D5;
    let D6;

    if (day === 0) {today = "S"; D0 = "M"; D1 = "T"; D2 = "W"; D3 = "T"; D4 = "F"; D5 = "S"; D6 = "S";}
    if (day === 1) {today = "M"; D0 = "T"; D1 = "W"; D2 = "T"; D3 = "F"; D4 = "S"; D5 = "S"; D6 = "M";}
    if (day === 2) {today = "T"; D0 = "W"; D1 = "T"; D2 = "F"; D3 = "S"; D4 = "S"; D5 = "M"; D6 = "T";}
    if (day === 3) {today = "W"; D0 = "T"; D1 = "F"; D2 = "S"; D3 = "S"; D4 = "M"; D5 = "T"; D6 = "W";}
    if (day === 4) {today = "T"; D0 = "F"; D1 = "S"; D2 = "S"; D3 = "M"; D4 = "T"; D5 = "W"; D6 = "T";}
    if (day === 5) {today = "F"; D0 = "S"; D1 = "S"; D2 = "M"; D3 = "T"; D4 = "W"; D5 = "T"; D6 = "F";}
    if (day === 6) {today = "S"; D0 = "S"; D1 = "M"; D2 = "T"; D3 = "W"; D4 = "T"; D5 = "F"; D6 = "S";}
    
            const opt1 = "Reading"
            const opt2 = "Exercising"
            const opt3 = "Studying"

            const handleChange = (e) => {
                
                if(e.target.value === "Reading"){setTask("Pages you will read on this day:"); setV("read"); 
                setSource("https://cdn.pixabay.com/photo/2016/11/18/16/56/book-1835799_960_720.jpg"); 
                setMeasure("pages");}

                if(e.target.value === "Exercising"){setTask("Minutes you will exercise on this day:"); setV("exercise");
                setSource("https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_960_720.jpg");
                setMeasure("hours");}

                if(e.target.value === "Studying"){setTask("Minutes you will study on this day:"); setV("study"); 
                setSource("https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_960_720.jpg");
                setMeasure("hours");}

                setOp(e.target.value);
                setP("Motiv");
            }

            const handleM = (e) => {
                setM(e.target.value);
                if (currentFirst === false) {setFirst(true); time();}
            }
            
            const handleN = (e) => {
                setN(e.target.value);
                if (currentFirst === false) {setFirst(true); time();}
            }

            function time () {
                setTimeout(appearContinue, 4000)
            }

            function appearContinue (){
                setC("p1");
            }
            
            

            if (currentP === 'Init') return(
                <React.Fragment>
                <div className="page">
                    <div className='p1'>&nbsp;Which one of theses habits do you want more in your life?&nbsp;</div>
                        <div className="form_layout">
                            <form onChange={handleChange} >
                                <select className="selectbox">
                                <option></option>
                                <option>{opt1}</option>
                                <option>{opt2}</option>
                                <option>{opt3}</option>
                                </select>
                            </form>
                        </div>
                </div>
                </React.Fragment>
            )

            if (currentP === 'Motiv') return(
                <React.Fragment>
                <div className="pageInsert">
                <input onChange={handleM} className="inputText" type="text" placeholder='My main motivation for having this habit is to...'/>
                <button onClick={()=>{setC("p0"); setP(currentOp); setFirst(false);}} className= {currentC + " button"}>Continue</button>
                </div>
                </React.Fragment>
            )
            
            if (currentP === "Reading") return (
                
                <React.Fragment>
                    <div className="pageInsert">
                        <div className='p1'>&nbsp;Minimum number of pages that is ok for you to start reading daily:&nbsp;</div>
                        <input onChange={handleN} className="insertNumber" type="number" id="quantity" name="quantity" min="1" max="1000"/>
                        <button onClick={()=>{setC("p0"); setP("Results"); setFirst(false);}} className= {currentC + " button"}>Continue</button>
                    </div>
                </React.Fragment>
            )
        
            if (currentP === "Exercising") return(
                <React.Fragment>
                    <div className="pageInsert">
                        <div className='p1'>&nbsp;Minimum number of minutes that is ok for you to start Exercising daily:&nbsp;</div>
                        <input onChange={handleN} className="insertNumber" type="number" id="quantity" name="quantity" min="5" max="1000"/>
                        <button onClick={()=>{setC("p0"); setP("Results"); setFirst(false);}} className= {currentC + " button"}>Continue</button>
                    </div>
                </React.Fragment>
            )

            if (currentP === "Studying") return (             
                <React.Fragment>
                    <div className="pageInsert">
                        <div className='p1'>&nbsp;Minimum number of minutes that is ok for you to start Studying daily:&nbsp;</div>
                        <input onChange={handleN} className="insertNumber" type="number" id="quantity" name="quantity" min="5" max="1000"/>
                        <button onClick={()=>{setC("p0"); setP("Results"); setFirst(false);}} className= {currentC + " button"}>Continue</button>
                    </div>
                </React.Fragment>
            )

            if (currentP === "Results") return (
                             
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

                    <p className="motiv space button" onClick={()=>{setP("Init")}}>Back to start &gt;</p>

                    </div>

                    
                    
                    
                </React.Fragment>
            )
            
}

export default Page
