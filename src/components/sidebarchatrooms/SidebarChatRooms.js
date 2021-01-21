import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {setChannelInfo} from '../../features/chatSlice'
import './SideBarChatRooms.css'
import './SideBarChatRooms.css'
import db from '../../firebase'

const SidebarChatRooms = ({id, channelName}) => {
    const [seed, setSeed] = useState("")
    const dispatch = useDispatch()
    const [messages, setMessages] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('channels').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    return (
        <div className="sidebarChatRoom" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            
            <div className="sidebar-chatInfo">
                <h2>{channelName}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
    )
}

export default SidebarChatRooms

