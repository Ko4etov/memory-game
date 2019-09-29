import React from 'react';

export default (props) => {
    return(
        <tr className={props.ClassNames.trClassName}>
            { Object.keys(props.row).map((keyNames, keyIndex) => <td className={props.ClassNames.tdClassName} key={keyIndex}>{props.row[keyNames]}</td>) }
        </tr>
    )
}