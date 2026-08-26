import { API_KEY } from '../data'

export const fetchChannel = async (channelId) => {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
    )

    const data = await response.json()

    return data.items[0]
}