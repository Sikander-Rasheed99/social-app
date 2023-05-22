import "./Topbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchOutlinedIcon className="searchIcon"/>
          <input placeholder="Search for Friends, Post and videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsitems">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsitems">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsitems">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/images/person/sikander-imamge-2.jpeg" alt="Person-One" className="topbarImage" />
      </div>
    </div>
  )
}
