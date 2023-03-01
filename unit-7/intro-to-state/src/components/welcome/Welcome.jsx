import React from 'react'

export default function Welcome(props) {
    
    function removeName() {
        // console.log('clicked');
        const updatedNames = props.names.filter(name => name !== props.name)

        props.setNames(updatedNames);
    }
    
    return (
        <div 
            className='welcome'
            onClick={removeName}
            >
            Welcome, {props.name}
        </div>
    )
}