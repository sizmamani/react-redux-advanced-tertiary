import React from 'react'

const HomeComponent = ({
    movie,
    showLoader
})=>{
    return (
        <div>
            <img src={movie.Poster} alt="Poster"/>
            <input type="button" value="Press me" onClick={()=>showLoader(true)} />
        </div>
    )
}

export default HomeComponent