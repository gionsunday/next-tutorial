import React from 'react'

export const Card = ({ children, className }) => {

  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }


  return (
    <div className={className} style={cardStyle}>{children}</div>
  )
}

