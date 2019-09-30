import React from 'react';

export default (props) => {
    return(
        <tr className={props.ClassNames.trClassName}>
            { 
                Object.keys(props.row).map((keyNames, keyIndex) => {
                    if (props.row.id === 0) {
                        return(
                            <td className={props.ClassNames.tdClassName + " table-body-row_cell--current-player"} key={keyIndex}>{props.row[keyNames]}</td>
                        )
                    }
                    return(
                        <td className={props.ClassNames.tdClassName} key={keyIndex}>{props.row[keyNames]}</td>
                    )
                })
            }
        </tr>
    )
}