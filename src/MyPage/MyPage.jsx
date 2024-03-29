import styled from 'styled-components';
import MyHeader from "./components/MyHeader";
import BottomNav from "../components/BottomNav";

const StyledMyPage = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MyPage = () => {
    return (
        <StyledMyPage>
            <MyHeader/>
            <div>MyPage</div>
            <BottomNav type="my"/>
        </StyledMyPage>
    );
}

export default MyPage;