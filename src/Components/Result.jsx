import React from 'react'

const Result = ({city, zipcodes}) => {
    return (
        <div>
            <div>
                <h1>{city}</h1>
            </div>
            <div>
                <ul>
                    {zipcodes.map(zip => {return <li>{zip}</li>})}
                </ul>
            </div>
        </div>
    )
}

export default Result
