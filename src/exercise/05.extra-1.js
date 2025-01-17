import * as React from 'react'
import '../box-styles.css'

function Box({ className, style, children }) {
  return (
    <div className={`box ${className}`} style={{ ...style, fontStyle: "italic" }}>{children}</div>
  )
}

const smallBox = <Box className="box--small" style={{ backgroundColor: "lightblue" }}>small lightblue box</Box>
const mediumBox = <Box className="box--medium" style={{ backgroundColor: "pink" }}>medium pink box</Box>
const largeBox = <Box className="box--large" style={{ backgroundColor: "orange" }}>large orange box</Box>
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
