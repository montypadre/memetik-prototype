import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from './photos';

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
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { image, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <SideBar>
            <SideBarWrapper>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
                <SideBarList>
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