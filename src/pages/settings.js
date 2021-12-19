/** @jsxImportSource theme-ui */
import { Box, Grid, Container } from 'theme-ui';

import TabNav from 'Components/TabNav';
import Settings from 'Sections/Settings/Settings';

function settings() {
    return (
        <Container>
            <Grid columns={[1, null, null, null, 2, '0.8fr 2.7fr']}>
                <Box>
                    <TabNav />
                </Box>
                <Box>
                    <Settings />
                </Box>
            </Grid>
        </Container>
    )
}
export default settings;
