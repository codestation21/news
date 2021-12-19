/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui';

import TopBar from 'Components/Home/TopBar';
import Channels from 'Components/Home/Channels';
import Headlines from 'Components/Home/Headlines';
import News from 'Components/Home/News';

function Home() {
    return (
        <Container pr={0, null, null, null, "5px", 3} px={["20px", null, null, null, "unset"]}>
            <TopBar />
            <Channels />
            <Headlines />
            <News />
        </Container>
    )
}
export default Home
