import React from 'react';
import Init from './Init';
import Motiv from './Motiv';
import Reading from './Reading';
import Exercising from './Exercising';
import Studying from './Studying';
import Results from './Results';


export type Page = {
    e:any,
    target:any,
    value:any,
}

function Page() {
    const [currentP, setP] = React.useState("Init");
    const [currentC, setC] = React.useState("p0");
    const [currentOp, setOp] = React.useState("Hello");
    const [currentV, setV] = React.useState("");
    const [currentN, setN] = React.useState(0);
    const [currentM, setM] = React.useState("");
    const [currentTask, setTask] = React.useState("Pages you will read on this day:");
    const [currentFirst, setFirst] = React.useState(false);
    const [currentSource, setSource] = React.useState("");
    const [currentMeasure, setMeasure] = React.useState("");
    
            const opt1 = "Reading"
            const opt2 = "Exercising"
            const opt3 = "Studying"

            const handleChange = (e:Page) => {
                
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

            const handleM = (e:Page) => {
                setM(e.target.value.toLowerCase());
                if (currentFirst === false) {setFirst(true); time();}
            }
            
            const handleN = (e:Page) => {
                setN(e.target.value);
                if (currentFirst === false) {setFirst(true); time();}
            }

            function time () {
                setTimeout(appearContinue, 4000)
            }

            function appearContinue (){
                setC("p1");
            } 

            const cMotiv = () => {
                setC("p0"); setP(currentOp); setFirst(false);
            }

            const cToResults = () => {
                setC("p0"); setP("Results"); setFirst(false);
            }
            
            const cToInit = () => {
                setP("Init")
            }
            
    return(
            <React.Fragment>
                    <Init
                        handleChange={handleChange}
                        opt1={opt1}
                        opt2={opt2}
                        opt3={opt3}
                        hidden={currentP !== 'Init'}
                    />

                    <Motiv
                        cMotiv={cMotiv}
                        handleM={handleM}
                        currentC={currentC}
                        hidden={currentP !== 'Motiv'}
                    />

                    <Reading
                        cToResults={cToResults}
                        handleN={handleN}
                        currentC={currentC}
                        hidden={currentP !== 'Reading'}
                    />

                    <Exercising
                        cToResults={cToResults}
                        handleN={handleN}
                        currentC={currentC}
                        hidden={currentP !== 'Exercising'}
                    />

                    <Studying
                        cToResults={cToResults}
                        handleN={handleN}
                        currentC={currentC}
                        hidden={currentP !== 'Studying'}
                    />

                    <Results
                        cToInit={cToInit}
                        currentTask={currentTask}
                        currentN={currentN}
                        currentM={currentM}
                        currentV={currentV}
                        currentSource={currentSource}
                        currentMeasure={currentMeasure}
                        hidden={currentP !== 'Results'}
                    />
            </React.Fragment>
            );    
}

export default Page
