/** @jsxImportSource theme-ui */
import { Container, Grid, Box } from 'theme-ui';

import TopNews from "Components/Index/Body/TopNews";
import News from "Components/Index/Body/News";
import LatestNews from "Components/Index/Body/LatestNews";

function Body() {
    return (
        <Container px={["20px", null, "25px", null, 4, null, 6]} pt={["160px", "140px", "130px", "100px", "95px"]} as="section">
            <TopNews />
            <Grid columns={[1, null, null, null, 2, '0.6fr 1.9fr']}>
                <Box>
                    <LatestNews />
                </Box>
                <Box>
                    <News />
                </Box>
            </Grid>
        </Container>
    )
}
export default Body;
