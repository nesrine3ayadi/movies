import React from 'react'

const nameSearch = ({search}) =>{
    return (
        <div className="col-md-8">
            <h1> MOVIES APP</h1>
            <input className="searchbox " type="text" placeholder="search" onChange={(e)=>search(e.target.value)}  />
        </div>
    )
}

export default nameSearch;
