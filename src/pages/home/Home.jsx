import styled from 'styled-components';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const HomeContainer = styled.div`
   display: flex;
   width: 100%;
   
`

export default function Home() {
    return (
        <>
            <Topbar />
            <HomeContainer>
                <Sidebar />
                <Feed />
                <Rightbar />
            </HomeContainer>
        </>
    )
}
