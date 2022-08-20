import React from "react";

export type InitArgs = {
	opt1: string,
	opt2: string,
    opt3: string,
	handleChange: (e:any)=>void,
    hidden: boolean,
}


const Init = ({opt1, opt2, opt3, handleChange, hidden}:InitArgs) => {

    if (hidden) return null;
    else return(
    <React.Fragment>
            <div className="page">
                    <div className='p1'>&nbsp;Which one of these habits do you want more in your life?&nbsp;</div>
                        <div className="formLayout">
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
    );
}

export default Init;