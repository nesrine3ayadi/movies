import React from 'react'

const nameSearch = ({search}) =>{
    return (
        <div>
            <h1> MOVIES APP</h1>
            <input type="text" placeholder="search" onChange={(e)=>search(e.target.value)} className="col-md-12" />
        </div>
    )
}

export default nameSearch;
