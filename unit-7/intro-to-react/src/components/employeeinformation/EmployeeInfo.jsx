import React from 'react';

function EmployeeInfo(props) {
    // console.log(props);

    return(
        <React.Fragment>
            <h1>{props.name}</h1>
            <ul style={{listStyleType: "none", textAlign: "left"}} >
                <li>From: {props.city}, {props.state}</li>
                <li>POSITON</li>
                <li>Favorite Food: FOOD</li>
            </ul>
        </React.Fragment>
    )
}

export default EmployeeInfo

