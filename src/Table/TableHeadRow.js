import React from 'react'

export default (props) => {
    return(
        <thead className={props.ClassNames.theadClassName}>
            <tr className={props.ClassNames.trClassName}>
                { 
                    props.name.map((elem, index) => {
                        let active = (elem.isActive) ? 'active' : '';

                        return(
                            <th 
                            key={index} 
                            className={props.ClassNames.thClassName +" "+ active}
                            > {elem.name} </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}