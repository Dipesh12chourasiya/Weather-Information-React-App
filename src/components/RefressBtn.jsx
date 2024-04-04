import React from 'react'

const RefressBtn = () => {
  return (
    <div>
      <button 
      className="btn bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" 
      onClick={()=>window.location.reload()}>
      Refresh
    </button>
    </div>
  )
}

export default RefressBtn
