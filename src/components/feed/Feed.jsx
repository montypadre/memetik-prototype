import styled from 'styled-components';
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from "../../dummyData";

const NewsFeed = styled.div`
   flex: 8;
   background-color: #FAFAFA;
`

const NewsFeedWrapper = styled.div`
    padding: 20px;
`

export default function Feed() {
    return (
        <NewsFeed>
            <NewsFeedWrapper>
                <Share />
                {Posts.map(p => (
                    <Post key={p.id} post={p} />
                ))}
            </NewsFeedWrapper>
        </NewsFeed>
    )
}