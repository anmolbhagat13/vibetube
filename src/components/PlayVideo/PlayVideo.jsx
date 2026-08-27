import React, { useState, useEffect } from 'react'
import './PlayVideo.css'
import tick from '../../assets/tick.svg'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import ask from '../../assets/ask.png'
import save from '../../assets/save.svg'
import threedots from '../../assets/threedots.png'
import sort from '../../assets/sort.svg'
import profile from '../../assets/profile.png'
import edit from '../../assets/edit.svg'
import emoji from '../../assets/emoji.png'
import { API_KEY } from '../../data'
import { formatViews, timeAgo } from '../../utils/format'

const PlayVideo = ({ videoId, category, setCategory }) => {
    const [cmt, setCmt] = useState(false)
    const [videoData, setVideoData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
            )
            const data = await response.json()
            setVideoData(data.items[0])
        }

        fetchVideo()
    }, [videoId])

    useEffect(() => {
        if (!videoData?.snippet.channelId) return

        const fetchChannel = async () => {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${videoData.snippet.channelId}&key=${API_KEY}`
            )
            const data = await response.json()
            setChannelData(data.items[0])
        }

        fetchChannel()
    }, [videoData])

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=35&key=${API_KEY}`
            )

            if (!response.ok) {
                setComments([])
                return
            }

            const data = await response.json()
            setComments(data.items)
        }

        fetchComments()
    }, [videoId])

    return (
        <div className='play-video'>

            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{videoData?.snippet.title}</h3>

            <div className="play-video-info">
                <div className="channel-info">

                    <div className="left-side">

                        <div className="logo">
                            <img
                                src={channelData?.snippet.thumbnails.medium.url}
                                alt=""
                            />
                        </div>

                        <div className="channel">
                            <p className='channel-name'>
                                {videoData?.snippet.channelTitle}
                                <img src={tick} alt="" />
                            </p>

                            <p className='channel-subs'>
                                {formatViews(channelData?.statistics.subscriberCount)} subscribers
                            </p>
                        </div>

                        <button className='btn join-btn'>
                            Join
                        </button>

                        <button className='btn subs-btn'>
                            Subscribe
                        </button>

                    </div>

                    <div className="right-side">

                        <span className='like rs'>
                            <img src={like} alt="" />
                            {formatViews(videoData?.statistics.likeCount)}
                        </span>

                        <span className='dislike rs'>
                            <img src={dislike} alt="" />
                        </span>

                        <span className='rs'>
                            <img src={share} alt="" />
                            Share
                        </span>

                        <span className='rs'>
                            <img src={ask} alt="" />
                            Ask
                        </span>

                        <span className='rs'>
                            <img src={save} alt="" />
                            Save
                        </span>

                        <span className='rs threedots'>
                            <img src={threedots} alt="" />
                        </span>

                    </div>

                </div>
            </div>

            <div className="channel-expand-info">

                <div className='ce-video-meta'>
                    <p>
                        {formatViews(videoData?.statistics.viewCount)} views
                    </p>

                    <p>
                        {timeAgo(videoData?.snippet.publishedAt)}
                    </p>
                </div>

                <div className="ce-vid-description">
                    <p>{videoData?.snippet.description}</p>
                </div>

            </div>

            <div className='comments-main'>

                <div className="comments">

                    <div className="comment-head">

                        <h3>
                            <span>{videoData?.statistics.commentCount}</span> Comments
                        </h3>

                        <span className='sort'>
                            <img src={sort} alt="" />
                            Sort by
                        </span>

                    </div>

                    {!cmt && (
                        <div className="cmt-profile">

                            <span className='cmt-profile-pic'>
                                <img src={profile} alt="" />
                            </span>

                            <input
                                onClick={() => {
                                    setCmt(true)
                                }}
                                type="text"
                                placeholder='Add a comment...'
                            />

                        </div>
                    )}

                    {cmt && (
                        <div className="cmt-profile-clicked">

                            <p className='cmt-as'>
                                Commenting as
                            </p>

                            <div className="cmt-profile-box">

                                <img
                                    className='cmt-profile-box-img'
                                    src={profile}
                                    alt=""
                                />

                                <div className="cmt-profile-box-info">
                                    <p>User Name</p>
                                    <p>@UserName-b3y</p>
                                </div>

                                <div className='cmt-edit'>
                                    <img src={edit} alt="" />
                                </div>

                            </div>

                            <div className="cmt-input">
                                <input type="text" />
                            </div>

                            <div className="cmt-footer">

                                <div className="emoji">
                                    <img src={emoji} alt="" />
                                </div>

                                <div className="btns">

                                    <div className="cancel-btn">
                                        <button
                                            onClick={() => {
                                                setCmt(false)
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>

                                    <div className="comment-btn">
                                        <button>
                                            Comment
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

                {comments.map((item) => {

                    const comment =
                        item.snippet.topLevelComment.snippet

                    return (
                        <div
                            key={item.id}
                            className="comments-card"
                        >

                            <div className="cc-left">

                                <div className="cc-pic">
                                    <img
                                        src={comment.authorProfileImageUrl}
                                        alt=""
                                    />
                                </div>

                            </div>

                            <div className="cc-right">

                                <div className="cc-r-first">

                                    <span className="cc-user-name">
                                        {comment.authorDisplayName}
                                    </span>

                                    <span className='cc-time'>
                                        {timeAgo(comment.publishedAt)}
                                    </span>

                                </div>

                                <span className="cc-comment">
                                    {comment.textDisplay}
                                </span>

                                <div className="cc-btns">

                                    <div className="like-btn c-btn">
                                        <button>
                                            <img src={like} alt="" />
                                        </button>
                                    </div>

                                    <span className='like-btn-span'>
                                        {formatViews(comment.likeCount)}
                                    </span>

                                    <div className="dislike-btn c-btn">
                                        <button>
                                            <img src={dislike} alt="" />
                                        </button>
                                    </div>

                                    <div className="reply-btn c-btn">
                                        <button>
                                            Reply
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default PlayVideo