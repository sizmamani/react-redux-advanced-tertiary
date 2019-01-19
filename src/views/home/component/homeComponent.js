import React from 'react'

const HomeComponent = ({
    movie
})=>{
    return (
        <div>
            <img src={movie.Poster} alt="Poster"/>
        </div>
    )
}

export default HomeComponent