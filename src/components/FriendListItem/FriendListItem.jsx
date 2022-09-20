import { Friend, IsOnline } from "./FriendListItem.styled";
import PropTypes from 'prop-types';


export const FriendItem = ({avatar,name,isOnline,id}) => {
    return (
        <Friend key={id}>
            <IsOnline isOnline={isOnline} >{ isOnline}</IsOnline>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{ name}</p>
        </Friend>
    );
}

FriendItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id:PropTypes.number,
}
