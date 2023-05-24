import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar(profile) {

  const HomeRightbar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img src="/assets/images/gift.png" alt="Birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola  Foster</b> and <b>3 other Friend</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/images/ad.png" alt="Ad" className="rightbarAd" />
        <h4 className="rightbarTitle">
          Online Friends
        </h4>
        <ul className="rightbarfriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
       <h4 className="rightbarTitle">User information</h4>

       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKey">Karachi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKey">Pakistan</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoKey">Single</span>
        </div>
       </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}
