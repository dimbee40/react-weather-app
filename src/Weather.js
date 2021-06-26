import React from "react";
import "./Weather.css";
export default function Weather (){
    return(
        <div className="Weather">
            <form>
                <input type="Search" placeholder="Enter a city..."
                className="form-control" />
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
            <h1>New York</h1>
        <ul>
            <li>Wednesday 5pm</li>
            <li>Mostly cloudy</li>
            </ul>
<div className="row">
<div className="col-6">
<img src="http://www.iemoji.com/view/emoji/185/animals-nature/cloud" alt= "mostly cloudy" />
6 degrees C.
</div>
<div className="col-6">
    <ul><li>Precipitation: 15%</li>
    <li>Humidity:`5%</li>
    <li>Wind- 13km/h</li></ul>
</div>
</div>
</div>

            
    )
}

