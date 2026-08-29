import React, { useEffect, useState } from 'react'
import './Recommend.css'
import tick from '../../assets/tick.svg'
import play from '../../assets/play.svg'
import options from '../../assets/options.svg'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../../data'
import { formatViews, timeAgo } from '../../utils/format'

const Recommend = () => {

    const [data, setData] = useState([])
    const [channelData, setChannelData] = useState({})

    const { categoryId, videoId } = useParams()

    const fetchData = async () => {

        const videoList_url =
            `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

        const response = await fetch(videoList_url)
        const result = await response.json()

        const filteredVideos = result.items.filter(
            item => item.id !== videoId
        )

        setData(filteredVideos)

        const channelIds = [
            ...new Set(
                filteredVideos.map(item => item.snippet.channelId)
            )
        ].join(',')

        if (!channelIds) return

        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${API_KEY}`
        )

        const channelResult = await channelResponse.json()

        const channels = {}

        channelResult.items.forEach(channel => {
            channels[channel.id] =
                channel.snippet.thumbnails.default.url
        })

        setChannelData(channels)
    }

    useEffect(() => {
        fetchData()
    }, [categoryId, videoId])

    return (
        <div className="vid-card-layout">

            <div className="vid-recommend">
                <div className="all-btn btn">
                    <button>All</button>
                </div>
                <div className="btn">
                    <button>From GreatStack</button>
                </div>
                <div className="btn">
                    <button>Web Development</button>
                </div>
            </div>
            {
                data.map((item) => (
                    <Link
                        key={item.id}
                        to={`/video/${item.snippet.categoryId}/${item.id}`}
                        className="vid-card"
                    >

                        <div className="vc-left">
                            <img
                                src={item.snippet.thumbnails.medium.url}
                                alt=""
                            />
                        </div>

                        <div className="vc-right">

                            <span className="vid-name">
                                {item.snippet.title}
                            </span>

                            <div className="vid-info">

                                <div className="vc-channel-name">
                                    <span>
                                        {item.snippet.channelTitle}
                                    </span>

                                    <img src={tick} alt="" />
                                </div>

                                <div className="vid-details">
                                    <div className='vid-views-box'>
                                        <img src={play} alt="" />

                                        <span className="vid-views">
                                            {formatViews(item.statistics.viewCount)}
                                        </span>
                                    </div>

                                    <span className="vid-p-time">
                                        {timeAgo(item.snippet.publishedAt)}
                                    </span>

                                </div>

                                <div className="options">
                                    <img src={options} alt="" />
                                </div>

                            </div>

                        </div>

                    </Link>
                ))
            }

        </div>
    )
}

export default Recommend