/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import Logo from 'Components/Index/Header/Logo';
import Navigation from 'Components/Index/Header/Navigation';
import Search from 'Components/Index/Header/Search';

function Header() {
    return (
        <Container px={["5px", null, null, "10px", null, null, 4]} as="header" sx={styles.Header}>
            <Grid columns={[1, null, null, 3, '0.7fr 3.4fr 0.7fr']} sx={{ alignItems: 'center' }}>
                <Logo />
                <Navigation />
                <Search />
            </Grid>
        </Container>
    )
}
export default Header;

const styles = {
    Header: {
        py: "10px",
        bg: "background_tartiary",
        position: "fixed",
        boxShadow: "0 0 20px #00000030",
        zIndex: '99'
    }
}
