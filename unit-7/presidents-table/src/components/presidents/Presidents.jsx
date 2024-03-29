import React from 'react'
import PresidentTable from './PresidentTable'
import { presidentsArray } from './presidents.constants'

function Presidents() {

    const livingPresidents = presidentsArray.filter(president => {
        return president.passed === undefined
    })

    // console.log(livingPresidents);

    return (
        <>
            <h2>Hello from Presidents</h2>
            <PresidentTable presidents={livingPresidents} title="Living Presidents" />
        </>
    )
}

export default Presidents