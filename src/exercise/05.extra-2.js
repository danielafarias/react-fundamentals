import * as React from 'react'
import '../box-styles.css'

function Box({ size, style, children }) {
  const className = size ? `box box--${size}` : 'box';

  return (
    <div className={className} style={{ ...style, fontStyle: "italic" }}>{children}</div>
  )
}

const smallBox = <Box size="small" style={{ backgroundColor: "lightblue" }}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{ backgroundColor: "pink" }}>medium pink box</Box>
const largeBox = <Box size="large" style={{ backgroundColor: "orange" }}>large orange box</Box>
const sizelessBox = <Box>sizeless box</Box>


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessBox}
    </div>
  )
}

export default App
