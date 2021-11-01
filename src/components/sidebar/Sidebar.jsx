import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';

// TODO: fix scrollbar-thumb
// TODO: get gallery images to pop out over border of sidebar, or pad the sidebar enough to give them room

const SideBar = styled.div`
   flex: 4;
   height: cal(100vh - 50px);
   background-color: #FAFAFA;
   overflow-y: scroll;
   &::-webkit-scrollbar {
       width: 5px;
   }
   &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
   }
   &::-webkit-scrollbar-thumb {
        background-color: rgb(179, 179, 179);
   }
`

const SideBarWrapper = styled.div`
    padding: 20px;
`

const SideBarList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

const SideBarListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .storeIcon, .chatIcon {
        margin-right: 15px;
    }
`

const SideBarListItemText = styled.span`

`

const SideBarMarketplace = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-gap: .5rem;
    cursor: pointer;
`

const SideBarMarketplaceItem = styled.img`
    border: 1px solid black;
    max-width: 100%;
    max-height: 100vh;
    object-fit: cover;
    transition: all .1s ease-in-out;
    &:hover {
        transform: scale(2);
    }
`

const SideBarButton = styled.button`
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
`

export default function Sidebar() {
    return (
        <SideBar>
            <SideBarWrapper>
                <SideBarMarketplace>
                    <SideBarMarketplaceItem src="/assets/gallery/MarkArt.jpg" alt="" />
                    <SideBarMarketplaceItem src="/assets/gallery/menu-main_bg.png" alt="" />
                    <SideBarMarketplaceItem src="/assets/gallery/100px-Jain_Prateek_Chihna.svg.png" alt="" />
                    <SideBarMarketplaceItem src="/assets/gallery/72645970_571936553567196_3640276544783384576_n.jpg" alt="" />
                    <SideBarMarketplaceItem src="/assets/gallery/94879104_1071999899866330_5775335488051216384_n.jpg" alt="" />
                    <SideBarMarketplaceItem src="/assets/gallery/120060462_178710167226763_4474176874152108456_o.jpg" alt="" />
                    <SideBarMarketplaceItem src="/assets/gallery/44542_101621806563853_2913840_n.jpg" alt="" />
                    <SideBarMarketplaceItem src="/assets/post/holofractalgraphic occurence.jpg" alt="" />
                </SideBarMarketplace>
                <SideBarList>
                    {/*<SideBarListItem>
                        <StoreIcon className="storeIcon" />
                        <SideBarListItemText>
                            Marketplace
                        </SideBarListItemText>
                    </SideBarListItem>*/}
                    <SideBarListItem>
                        <ChatIcon className="chatIcon" />
                        <SideBarListItemText>
                            Chat
                        </SideBarListItemText>
                    </SideBarListItem>
                </SideBarList>
            </SideBarWrapper>
        </SideBar>
    )
}