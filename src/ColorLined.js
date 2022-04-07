import React from 'react'

const ColorLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: .5
        }}
    />
);

export default ColorLine;