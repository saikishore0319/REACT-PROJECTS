import React from "react"
function Button({
    childern,
    bgcolour = "bg-blue-500",
    type = 'button',
    textColour = 'text-white',
    className = '',
    ...props
}) {
  return (
   <button className={`${bgcolour}${textColour}${className}`}{...props}
   type={type}
   >
    {childern}
    </button> 
  )
}

export default Button