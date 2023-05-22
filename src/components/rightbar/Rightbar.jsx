import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  )
}
