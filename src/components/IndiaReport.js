import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

const IndiaReport = ({ covid19 }) => (
    <div className="container jumbotron">
        <h4 className="">India Report</h4>

        <div className="card-deck">
            <div className="card shadow-lg rounded border-primary" style={{maxWidth : "10rem"}}>
                <h6 className="text-center text-primary">Active Cases</h6>
                <div className="card-body text-center">
                    <p className="card-text text-primary">{covid19.activeCasesNew} 
                        {covid19.activeCasesNew > 0 ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowCircleDown} />}
                    </p>
                </div>
            </div>  

            <div className="card shadow-lg rounded border-success" style={{maxWidth : "10rem"}}>
                <h6 className="text-center text-success">Recovered Cases</h6>
                <div className="card-body text-center">
                    <p className="card-text text-success">{covid19.recoveredNew}
                        {covid19.recoveredNew > 0 ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowCircleDown} />}
                    </p>
                </div>
            </div>  

            <div className="card shadow-lg rounded border-danger" style={{maxWidth : "10rem"}}>
                <h6 className="text-center text-danger">Deaths</h6>
                <div className="card-body text-center">
                    <p className="card-text text-danger">{covid19.deathsNew}
                        {covid19.deathsNew > 0 ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowCircleDown} />}
                    </p>
                </div>
            </div>  

            <div className="card shadow-lg rounded border-secondary" style={{maxWidth : "10rem"}}>
                <h6 className="text-center text-secondary">Total Cases</h6>
                <div className="card-body text-center">
                    <p className="card-text text-secondary">{covid19.totalCases}
                        {covid19.activeCasesNew > 0 ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowCircleDown} />}
                    </p>
                </div>
            </div>  
        </div>
        
    </div>
);

export default IndiaReport