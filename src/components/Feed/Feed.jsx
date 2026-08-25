import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import channel from '../../assets/channel.jpg'
import options from '../../assets/options.svg'
import { API_KEY } from '../../data'
import { formatViews, timeAgo } from '../../utils/format'

const Feed = ({ category }) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [category])

    return (
        <div className='feed'>
            {data.map((item, index) => {
                return (
                    <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <div className="video">
                            <img className='thumbnail' src={item.snippet.thumbnails.medium.url} alt="" />
                        </div>
                        <div className="video-info">
                            <div className="video-info-left">
                                <img src={channel} alt="" />
                            </div>
                            <div className="video-info-right">
                                <h2>{item.snippet.title}</h2>
                                <h3>{item.snippet.channelTitle}</h3>
                                <p> {formatViews(item.statistics.viewCount)} views &bull;{" "}
                                    {timeAgo(item.snippet.publishedAt)}
                                </p>
                            </div>
                            <img className='options' src={options} alt="" />
                        </div>
                    </Link>
                )
            })}

        </div >
    )
}

export default Feed
