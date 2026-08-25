import React, { useState, useEffect } from 'react'
import './PlayVideo.css'
import channel from '../../assets/channel.jpg'
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
import showmore from '../../assets/vt-showmore.svg'
import {API_KEY} from '../../data'
import { formatViews, timeAgo } from '../../utils/format'

const commentCard = [
    {
        id: 1,
        profile: profile,
        userName: "@Soumojitdas107",
        time: "1 year ago",
        comment: "this awara ad is just disturbing!!",
        likeCount: "86"
    },
    {
        id: 2,
        profile: profile,
        userName: "@survivalkingadarsh9788",
        time: "1 years ago (edited)",
        comment: "Sir can you make u school management system with CRUD operations parent teacher and student interface attendance management",
        likeCount: "75"
    },
    {
        id: 3,
        profile: profile,
        userName: "@Soumojitdas107",
        time: "1 year ago",
        comment: "this awara ad is just disturbing!!",
        likeCount: "114"
    },
    {
        id: 4,
        profile: profile,
        userName: "@wanjeeric4885",
        time: "1 year ago",
        comment: "I thank you enormously for level in React now, Sir, I am a pure Linguist but I am mastering web dev easily thanks to your tutorials",
        likeCount: "11"
    },
    {
        id: 5,
        profile: profile,
        userName: "@gloreez4",
        time: "1 year ago",
        comment: "Thank you always for this React video with 3 projects. you're the best",
        likeCount: "12"
    }
]

const PlayVideo = ({ videoId, category, setCategory }) => {
    const [cmt, setCmt] = useState(false)
    const [videoData, setVideoData] = useState(null)

    useEffect(()=>{
        const fetchVideo = async ()=>{
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
            )
            const data = await response.json()
            console.log(data)
            setVideoData(data.items[0])
        }
        fetchVideo()
    },[videoId])

    return (
        <div className='play-video'>
            {/* <video src={video} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <h3>{videoData?.snippet.title}</h3>
            <div className="play-video-info">
                <div className="channel-info">
                    <div className="left-side">
                        <div className="logo">
                            <img src={channel} alt="" />
                        </div>
                        <div className="channel">
                            <p className='channel-name'>{videoData?.snippet.channelTitle}<img src={tick} alt="" /></p>
                            <p className='channel-subs'>1.23M subscribers</p>
                        </div>
                        <button className='btn join-btn'>Join</button>
                        <button className='btn subs-btn'>Subscribe</button>
                    </div>
                    <div className="right-side">
                        <span className='like rs'><img src={like} alt="" />{formatViews(videoData?.statistics.likeCount)}</span>
                        <span className='dislike rs'><img src={dislike} alt="" /></span>
                        <span className='rs'><img src={share} alt="" />Share</span>
                        <span className='rs'><img src={ask} alt="" />Ask</span>
                        <span className='rs'><img src={save} alt="" />Save</span>
                        <span className='rs threedots'><img src={threedots} alt="" /></span>
                    </div>
                </div>
            </div>
            <div className="channesetCmtl-expand-info">
                <div className='ce-video-meta'>
                    <p>{formatViews(videoData?.statistics.viewCount)} views</p>
                    <p>{timeAgo(videoData?.snippet.publishedAt)}</p>
                </div>
                <div className="ce-vid-description">
                    <p>{videoData?.snippet.description}</p>
                </div>
            </div>
            <div className='comments-main'>
                <div className="comments">
                    <div className="comment-head">
                        <h3><span>{videoData?.statistics.commentCount}</span> Comments</h3>
                        <span className='sort'><img src={sort} alt="" />Sort by</span>
                    </div>
                    {!cmt && (
                        <div className="cmt-profile">
                            <span className='cmt-profile-pic'><img src={profile} alt="" /></span>
                            <input onClick={() => { setCmt(true) }} type="text" placeholder='Add a comment...' />
                        </div>
                    )}
                    {cmt && (
                        <div className="cmt-profile-clicked">
                            <p className='cmt-as'>Commenting as</p>
                            <div className="cmt-profile-box">
                                <img className='cmt-profile-box-img' src={profile} alt="" />
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
                            </div>;
                            <div className="cmt-footer">
                                <div className="emoji">
                                    <img src={emoji} alt="" />
                                </div>
                                <div className="btns">
                                    <div className="cancel-btn">
                                        <button onClick={() => { setCmt(false) }} >Cancel</button>
                                    </div>
                                    <div className="comment-btn">
                                        <button>Comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {commentCard.map((comment) => {
                    return (
                        < div key={comment.id} className="comments-card" >
                            <div className="cc-left">
                                <div className="cc-pic">
                                    <img src={comment.profile} alt="" />
                                </div>
                                <div className="c-line"></div>
                            </div>
                            <div className="cc-right">
                                <div className="cc-r-first">
                                    <span className="cc-user-name">{comment.userName}</span>
                                    <span className='cc-time'>{comment.time}</span>
                                </div>
                                <span className="cc-comment">{comment.comment}</span>
                                <div className="cc-btns">
                                    <div className="like-btn c-btn">
                                        <button><img src={like} alt="" /></button>
                                    </div>
                                    <span className='like-btn-span'>{comment.likeCount}</span>
                                    <div className="dislike-btn c-btn">
                                        <button><img src={dislike} alt="" /></button>
                                    </div>
                                    <div className="reply-btn c-btn">
                                        <button>Reply</button>
                                    </div>
                                </div>
                                <div className="r-reply-btn">
                                    <button>
                                        <div className="r-reply-box">
                                            <span>10</span>
                                            replies
                                        </div>
                                        <img src={showmore} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div >
    )
}

export default PlayVideo
