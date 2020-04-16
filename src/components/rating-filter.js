import React from 'react'
import Rating from './rating'

function ratingFilter({change, count}) {
    return (
        <div className="Mystars col-md-4">
            <Rating count={count} change={change} />
        </div>
    )
}

export default ratingFilter