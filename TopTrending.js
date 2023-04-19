import {useEffect,useState} from 'react'
import get from "axios"
import "./style.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

function TopTrending() {

    const [TopTrendingData, setTopTrendingData] = useState([])

    const [myVideoId, setMyVideoId] = useState("")

    const myUrl = "https://image.tmdb.org/t/p/original"

    useEffect(function()
    {
        get("https://api.themoviedb.org/3/trending/all/week?api_key=a07436ebf711f5da87bd495e32f9d28b&language=en-US")
        .then(function(output)
        {
            setTopTrendingData(output.data.results)
        })
        .catch(function(error)
        {
            alert(error)
        })
    })

   function clicked(movie)
    {
      movieTrailer(movie)
      .then(function(output)
      {
         setMyVideoId(new URLSearchParams(new URL(output).search).get("v"))
      })
      .catch(function(error)
      {
         alert(error)
      })
    }
  return (
    <div>
    <h2 style={{color:"white", fontStyle:"italic"}}>TOP TRENDING</h2>
      <div className='allimages'>
        {
            TopTrendingData.map(function(i)
            {
                let movieName = i.title
                return <img id='myimage' src={`${myUrl}${i.poster_path}`} onClick={function()
                {
                  clicked(movieName)
                }}/>
            })
        }

      </div>

      <div>
        <YouTube videoId={myVideoId}></YouTube>
      </div>
    </div>
  )
}

export default TopTrending
