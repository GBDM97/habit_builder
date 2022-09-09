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
    const [currentTask, setTask] = React.useState("Daily pages you will read on this month:");
    const [currentFirst, setFirst] = React.useState(false);
    const [currentSource, setSource] = React.useState("");
    const [currentMeasure, setMeasure] = React.useState("");

    const [current0, set0] = React.useState(0);
    const [current1, set1] = React.useState(0);
    const [current2, set2] = React.useState(0);
    const [current3, set3] = React.useState(0);
    const [current4, set4] = React.useState(0);
    const [current5, set5] = React.useState(0);
    const [current6, set6] = React.useState(0);
    const [current7, set7] = React.useState(0);
    const [current8, set8] = React.useState(0);
    const [current9, set9] = React.useState(0);
    const [current10, set10] = React.useState(0);

    
            const opt1 = "Reading"
            const opt2 = "Exercising"
            const opt3 = "Studying"

            const handleChange = (e:Page) => {
                
                if(e.target.value === "Reading"){setTask("Daily pages you will read on this month:"); setV("read"); 
                setSource("https://cdn.pixabay.com/photo/2016/11/18/16/56/book-1835799_960_720.jpg"); 
                setMeasure("pages");}

                if(e.target.value === "Exercising"){setTask("Daily minutes you will exercise on this month:"); setV("exercise");
                setSource("https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_960_720.jpg");
                setMeasure("hours");}

                if(e.target.value === "Studying"){setTask("Daily minutes you will study on this month:"); setV("study"); 
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

                if (currentV === "study") {
                set0(e.target.value)
                if (e.target.value * 2 >= 120) {set1(120)} else {set1(e.target.value * 2)}
                if (e.target.value * 3 >= 120) {set2(120)} else {set2(e.target.value * 3)}
                if (e.target.value * 4 >= 120) {set3(120)} else {set3(e.target.value * 4)}
                if (e.target.value * 5 >= 120) {set4(120)} else {set4(e.target.value * 5)}
                if (e.target.value * 6 >= 120) {set5(120)} else {set5(e.target.value * 6)}
                if (e.target.value * 7 >= 120) {set6(120)} else {set6(e.target.value * 7)}
                if (e.target.value * 8 >= 120) {set7(120)} else {set7(e.target.value * 8)}
                if (e.target.value * 9 >= 120) {set8(120)} else {set8(e.target.value * 9)}
                if (e.target.value * 10 >= 120) {set9(120)} else {set9(e.target.value * 10)}
                if (e.target.value * 11 >= 120) {set10(120)} else {set10(e.target.value * 11)}
                }

                if (currentV === "exercise") {
                if (e.target.value >= 90) {set0(90)} else {set0(e.target.value)}
                if (e.target.value * 2 >= 90) {set1(90)} else {set1(e.target.value * 2)}
                if (e.target.value * 3 >= 90) {set2(90)} else {set2(e.target.value * 3)}
                if (e.target.value * 4 >= 90) {set3(90)} else {set3(e.target.value * 4)}
                if (e.target.value * 5 >= 90) {set4(90)} else {set4(e.target.value * 5)}
                if (e.target.value * 6 >= 90) {set5(90)} else {set5(e.target.value * 6)}
                if (e.target.value * 7 >= 90) {set6(90)} else {set6(e.target.value * 7)}
                if (e.target.value * 8 >= 90) {set7(90)} else {set7(e.target.value * 8)}
                if (e.target.value * 9 >= 90) {set8(90)} else {set8(e.target.value * 9)}
                if (e.target.value * 10 >= 90) {set9(90)} else {set9(e.target.value * 10)}
                if (e.target.value * 11 >= 90) {set10(90)} else {set10(e.target.value * 11)}
                }

                if (currentV === "read") {
                if (e.target.value >= 500) {set0(500)} else {set0(e.target.value)}
                if (e.target.value * 2 >= 500) {set1(500)} else {set1(e.target.value * 2)}
                if (e.target.value * 3 >= 500) {set2(500)} else {set2(e.target.value * 3)}
                if (e.target.value * 4 >= 500) {set3(500)} else {set3(e.target.value * 4)}
                if (e.target.value * 5 >= 500) {set4(500)} else {set4(e.target.value * 5)}
                if (e.target.value * 6 >= 500) {set5(500)} else {set5(e.target.value * 6)}
                if (e.target.value * 7 >= 500) {set6(500)} else {set6(e.target.value * 7)}
                if (e.target.value * 8 >= 500) {set7(500)} else {set7(e.target.value * 8)}
                if (e.target.value * 9 >= 500) {set8(500)} else {set8(e.target.value * 9)}
                if (e.target.value * 10 >= 500) {set9(500)} else {set9(e.target.value * 10)}
                if (e.target.value * 11 >= 500) {set10(500)} else {set10(e.target.value * 11)}
                }

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
                        current0={current0}
                        current1={current1}
                        current2={current2}
                        current3={current3}
                        current4={current4}
                        current5={current5}
                        current6={current6}
                        current7={current7}
                        current8={current8}
                        current9={current9}
                        current10={current10}
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
