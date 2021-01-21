import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase";
import SidebarChatRooms from "../sidebarchatrooms/SidebarChatRooms";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const channelName = input

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
    setInput("")
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <form>
            <input
              type="text"
              placeholder="Search or start a new chat"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="sidebar-searchButton"
            >
              click
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-chatRooms">
        {channels.map(({ id, channel }) => (
          <SidebarChatRooms
            key={id}
            id={id}
            channelName={channel.channelName}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
