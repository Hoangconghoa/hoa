import Music from "../Music"


const MusicPlay = () => {
  return (
    <div className="flex">
        <div> Most Popular
          <div><Music/></div>
        </div>
        <div>Now Playing</div>
    </div>
  )
}

export default MusicPlay