import styled from 'styled-components';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';

const SharePost = styled.div`
    width: 100%;
    height: 20;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    background-color: #FFF;
`

const SharePostWrapper = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`

const SharePostLeft = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
`

const SharePostProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    cursor: pointer;
`

const SharePostInput = styled.textarea`
    border: none;
    min-width: 47%;
    line-height:20px;
    font-size:19px;
    resize: none;
    overflow: hidden;
    &:focus {
        outline: none;
    }
`

const SharePostRight = styled.div`
    display: flex;
`

const SharePostOption = styled.div`
    display: flex;
    align-items: center;
    
    margin-right: 15px;
    cursor: pointer;
    .fileUploadOutlinedIcon {
        width: 40px;
        height: 40px;
        color: #2E7BBC;
        transition: 0.3s;
        &:hover {
            color: #D9B08C;
        }
    }
`

const SharePostButton = styled.button`
    width: 75px;
    border: none;
    padding: 10px;
    border-radius: 500px;
    background-color: #4D97D7;
    font-weight: 500;
    margin-right: 200px;
    cursor: pointer;
    color: #000;
    transition: 0.3s;
    &:hover {
        background-color: #2E7BBC;
    }
`

export default function Share() {
    const [shareValue, setShareValue] = useState("");

    const textRef = useRef(null);

    const useDynamicHeightField = (element, value) => {
        useEffect(() => {
            if (!element) return;

            element.current.style.height = 'auto';
            element.current.style.height = element.current.scrollHeight + 'px';
        }, [element, value]);
    };

    useDynamicHeightField(textRef, shareValue);

    const onChange = (e) => {
        setShareValue(e.target.value);
    }

    return (
        <SharePost>
            <SharePostWrapper>
                <SharePostLeft>
                    <SharePostProfilePicture src="/assets/person/10881736_818767454849281_615933931154256178_n.jpg" alt="" />
                    <FontAwesomeIcon icon="chevron-right" />
                    <SharePostInput
                        ref={textRef}
                        onChange={onChange}
                        rows={1}
                    />
                </SharePostLeft>
                <SharePostRight>
                    <SharePostOption>
                        <FileUploadOutlinedIcon className="fileUploadOutlinedIcon" />
                    </SharePostOption>
                </SharePostRight>
                {/*<SharePostButton>Share</SharePostButton>*/}
            </SharePostWrapper>
        </SharePost>
    )
}
