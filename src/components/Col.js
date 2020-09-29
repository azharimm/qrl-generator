import React from 'react'

const Col = (props) => {
    return (
        <div className={props.className}>
            { props.children }
        </div>
    )
}

export default Col
