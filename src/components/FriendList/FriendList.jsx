import { FriendsList } from "./FriendList.styled"
import { FriendItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ avatar,name,isOnline,id }) => {
                return <FriendItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            })}
        </FriendsList>
    )
};

FriendList.propTypes = {
   friends:PropTypes.array.isRequired,
}