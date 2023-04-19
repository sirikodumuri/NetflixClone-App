import {useEffect,useState} from 'react'
import get from "axios"
import "./style.css"

function Comedy() {

    const [comedyMovies, setComedyMovies] = useState([])

    const myUrl = "https://image.tmdb.org/t/p/original"
  
    useEffect(function()
    {
        get("https://api.themoviedb.org/3/discover/movie?api_key=a07436ebf711f5da87bd495e32f9d28b&language=en-US")
        .then(function(output)
        {
           setComedyMovies(output.data.results)
        })
        .catch(function(error)
        {
            alert(error)
        })
    })

  return (
    <div>
        <h2 style={{color:"white",fontStyle:"italic"}}>COMEDY</h2>
      <div className='allimages'>
        {
            comedyMovies.map(function(i)
            {
                return <img id='myimage' src={`${myUrl}${i.poster_path}`}/>
            })
        }

      </div>
    </div>
  )
}

export default Comedy