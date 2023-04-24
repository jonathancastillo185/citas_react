import { useState, useEffect } from "react";

const Error = ({children}) => {
  return (
    <div className="font-bold text-white text-center p-3 uppercase bg-red-700 mb-3 rounded-xl">
    {children}
  </div>
  )
}

export default Error
