import React from 'react'

export default function Friendlist({ user }) {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="Friend" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
