import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData"
import { useState } from "react";

export default function Post({ post }) {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsliked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsliked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="Person-One" className="postProfileImage" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon className="postTopIcon" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="First Post" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomleft">
                        <img className="likeIcon" src="/assets/images/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/images/heart.png" alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
