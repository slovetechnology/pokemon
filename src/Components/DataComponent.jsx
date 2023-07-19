import React from 'react'

const DataComponent = ({title, tag, height, color}) => {
    const width = `2.5rem`
    return (
        <div>
            <div title={title} className={`${color} shadow-xl ${tag === 'first' ? 'rounded-tr-lg rounded-tl-lg' : tag === 'last' ? 'rounded-br-lg rounded-bl-lg' : ''}`} style={{ width: width, height: height }}></div>
        </div>
    )
}

export default DataComponent