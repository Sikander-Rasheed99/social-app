import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import "./profile.css"

export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                           <img className='profileCoverImg' src="/assets/images/post/3.jpeg" alt="Profile" />
                           <img className='profileImg' src="/assets/images/person/sikander-imamge-2.jpeg" alt="Profile" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sikander Rasheed</h4>
                            <span className="profileInfoDesc">Hllww My Friend!</span>
                        </div>
                    </div>

                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}
