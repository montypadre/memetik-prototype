import styled from 'styled-components';
import { Users } from "../../dummyData";
import Online from "../online/Online";

const RightBar = styled.div`
   flex: 3.5;
   background-color: #FAFAFA;
`

const RightBarWrapper = styled.div`
    padding: 20px 20px 0 0;
`

const RightBarFriendList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

const RightBarTitle = styled.h4`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`

const RightBarInfo = styled.div`
    margin-bottom: 30px;
`

const RightBarInfoItem = styled.div`
    margin-bottom: 10px;
`

const RightBarInfoKey = styled.span`
    font-weight: 500;
    margin-right: 15px;
    color: #555;
`

const RightBarInfoValue = styled.span`
    font-weight: 300;
`

const RightBarFollowings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const RightBarFollowing = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 20px;
    cursor: pointer;
`

const RightBarFollowingImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`

const RightBarFollowingName = styled.span`

`

export default function Rightbar({profile}) {

    const HomeRightBar = () => {
        return(
            <>
            <RightBarFriendList>
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </RightBarFriendList>
            </>
        );
    };

    const ProfileRightBar = () => {
        return(
            <>
            <RightBarTitle>User Information</RightBarTitle>
            <RightBarInfo>
                <RightBarInfoItem>
                    <RightBarInfoKey>City:</RightBarInfoKey>
                    <RightBarInfoValue>New York</RightBarInfoValue>
                </RightBarInfoItem>
                <RightBarInfoItem>
                    <RightBarInfoKey>From:</RightBarInfoKey>
                    <RightBarInfoValue>Madrid</RightBarInfoValue>
                </RightBarInfoItem>
            </RightBarInfo>
            <RightBarFollowings>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                <RightBarFollowing>
                    <RightBarFollowingImg src="/assets/person/devin_marx.png"/>
                    <RightBarFollowingName>Devin The Dude</RightBarFollowingName>
                </RightBarFollowing>
                
            </RightBarFollowings>
            </>
        )
    }
    return (
        <RightBar>
            <RightBarWrapper>
                <ProfileRightBar />
            </RightBarWrapper>
        </RightBar>
    )
}