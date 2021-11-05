import styled from 'styled-components';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const ProfileContainer = styled.div`
   display: flex;
`

const ProfileRight = styled.div`
    flex: 10;
`

const ProfileRightTop = styled.div`

`

const ProfileRightBottom = styled.div`
    display: flex;
`

const ProfileCover = styled.div`
    height: 320px;
    position: relative;
    background-color: #FAFAFA;
`

const ProfileCoverImg = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    cursor: pointer;
`

const ProfileUserImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 150px;
    border: 3px solid white;
    cursor: pointer;
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;
`

const ProfileInfoName = styled.h4`
    font-size: 24px;
    background-color: #FAFAFA;
`

const ProfileInfoDesc = styled.span`
    font-weight: 300;
    background-color: #FAFAFA;
`

export default function Profile() {
    return (
        <>
            <Topbar />
            <ProfileContainer>
                <Sidebar />
                <ProfileRight>
                    <ProfileRightTop>
                        <ProfileCover>
                            <ProfileCoverImg src="/assets/post/holofractalgraphic occurence.jpg" alt="" />
                            <ProfileUserImg src="/assets/person/birdhead_shaman.jpg" alt="" />
                        </ProfileCover>
                        <ProfileInfo>
                            <ProfileInfoName>
                                Monty Padre
                            </ProfileInfoName>
                            <ProfileInfoDesc>
                                Hello darkness, my old friend.
                            </ProfileInfoDesc>
                        </ProfileInfo>
                    </ProfileRightTop>
                    <ProfileRightBottom>
                        <Feed />
                        <Rightbar profile />
                    </ProfileRightBottom>
                </ProfileRight>
            </ProfileContainer>
        </>
    )
}
