import React from "react";
import "./Weather.css";
import Button from 'react-bootstrap/Button';
export default function Weather (){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-6"><input type="Search" placeholder="Enter a city..."
                className="form-control" /></div>
                <div className="col-3"><input type="submit" value="Search" className="btn btn-primary" /> </div></div>
            </form>
            <h1>New York</h1>
        <ul>
            <li>Wednesday 5pm</li>
            <li>Mostly cloudy</li>
            </ul>

            <div className="container">
                <div className="row">
                    <div className="col-6"><img  href="https://unsplash.com/photos/K-Iog-Bqf8E" alt="cloudy" /> 22°C</div>
                    <div className="col-6"> <ul>
                        <li>
                            Windspeed: 35 km/h</li>
                            <li>Humidity: 35%</li>
                            <li>Precipitation: 20%</li></ul></div>
                </div>
            </div>
            
           
    </div>


            
    )
}

