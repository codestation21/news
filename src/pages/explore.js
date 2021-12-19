/** @jsxImportSource theme-ui */
import { Box, Grid, Container } from 'theme-ui';

import TabNav from 'Components/TabNav';
import Explore from 'Sections/Explore/Explore';

function explore() {
    return (
        <Container>
            <Grid columns={[1, null, null, null, 2, '0.8fr 2.7fr']}>
                <Box>
                    <TabNav />
                </Box>
                <Box>
                    <Explore />
                </Box>
            </Grid>
        </Container>
    )
}
export default explore;
