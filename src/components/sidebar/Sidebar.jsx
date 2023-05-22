import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../dummyData"
import Friendlist from "../friendlist/Friendlist";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span>Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span>Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon" />
            <span>Video</span>
          </li>
          <li className="sidebarListItem">
            <PeopleIcon className="sidebarIcon" />
            <span>Group</span>
          </li>
          <li className="sidebarListItem">
            <TurnedInIcon className="sidebarIcon" />
            <span>BookMarks</span>
          </li>
          <li className="sidebarListItem">
            <LiveHelpIcon className="sidebarIcon" />
            <span>Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon" />
            <span>Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span>Cources</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHR" />
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <Friendlist key={u.id} user={u} />
          ))}
        </ul>

      </div>
    </div>
  )
}
