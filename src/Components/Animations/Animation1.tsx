
function Animation1() {

    return(
    <div className='background_container'>
        <div className="movingBox lgreen small" style={{"transform":"rotate(30deg) translateY(-200px) translateX(-450px)" , "animationDelay": "-2.5s"}}></div>
        <div className="movingBox black medium" style={{"transform":"rotate(30deg) translateY(-100px) translateX(-450px)" , "animationDelay": "-5s"}}></div>
        <div className="movingBox green medium" style={{"transform":"rotate(30deg) translateX(-450px)" , "animationDelay": "-3.5s"}}></div>
        <div className="movingBox lgreen small" style={{"transform":"rotate(30deg) translateY(100px) translateX(-450px)" , "animationDelay": "-6s"}}></div>
        <div className="movingBox black medium" style={{"transform":"rotate(30deg) translateY(200px) translateX(-450px)" , "animationDelay": "-1s"}}></div>
        <div className="movingBox black small" style={{"transform":"rotate(30deg) translateY(200px) translateX(-450px)" , "animationDelay": "-3s"}}></div>
        <div className="movingBox lgreen small" style={{"transform":"rotate(30deg) translateY(200px) translateX(-450px)" , "animationDelay": "-4s"}}></div>
        <div className="movingBox green small" style={{"transform":"rotate(30deg) translateY(300px) translateX(-450px)" , "animationDelay": "-4.5s"}}></div>
        <div className="movingBox lgreen small" style={{"transform":"rotate(30deg) translateY(400px) translateX(-450px)" , "animationDelay": "-2s"}}></div>
        <div className="movingBox black medium" style={{"transform":"rotate(30deg) translateY(500px) translateX(-450px)", "animationDelay": "-4s"}}></div>
        <div className="movingBox green medium" style={{"transform":"rotate(30deg) translateY(600px) translateX(-450px) ", "animationDelay": "-0.5s"}}></div>
    </div>
    )
}

export default Animation1