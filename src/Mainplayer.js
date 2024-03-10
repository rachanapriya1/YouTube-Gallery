import React from "react";

function Mainplayer(props) {
    var video = props.videos[0]
    console.log(video)

    return (
        <div> <div id="mainplayer" className="video-item" >
                    <img id="thumbnail" src={video.thumbnailUrl} alt={video.title}></img>
              </div>
                     <h3 id="video-title">{video.title}</h3>
                     <h2 id="channelname"><span><img id="logo" src={video.channelLogoUrl} alt={video.title}></img></span>{video.channelName}</h2>
            <div id="video-actions">
                  <p>
                    <b><span id="views-count">{video.views}k</span> views</b>
                    <b> <span id="likes-count">{video.likes}k</span> likes</b>
                 </p>
            </div>
        </div>
    )
}

export default Mainplayer;