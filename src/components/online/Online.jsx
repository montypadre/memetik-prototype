import styled from 'styled-components';

const RightBarFriend = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const RightBarProfileImgContainer = styled.div`
    margin-right: 10px;
    postion: relative;
`

const RightBarProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const RightBarOnline = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    margin-left: -10px;
    border: 2px solid white;
`

const RightBarUsername = styled.span`
    font-weight: 500;
`

export default function Online({ user }) {
    return (
        <RightBarFriend>
            <RightBarProfileImgContainer>
                <RightBarProfileImg src={user.profilePicture} alt="" />
                <RightBarOnline></RightBarOnline>
            </RightBarProfileImgContainer>
            <RightBarUsername>{user.username}</RightBarUsername>
        </RightBarFriend>
    )
}
