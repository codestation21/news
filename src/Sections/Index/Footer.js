/** @jsxImportSource theme-ui */
import { Container, Flex, Box } from 'theme-ui';

import FooterNav from 'Components/Index/Footer/FooterNav';
import Social from 'Components/Index/Footer/Social';
import Email from 'Components/Index/Footer/Email';
import Copyright from 'Components/Index/Footer/Copyright';

function Footer() {
    return (
        <Box>
            <Container px={["5px", null, "10px", null, "20px", 4, 6]} pt={["5rem", null, null, "7rem"]} as="footer">
                <Container px={["5px", null, "10px", null, "20px", 4, 6]}>
                    <Flex sx={styles.NavContainer}>
                        <FooterNav />
                        <Social />
                    </Flex>
                </Container>
                <Email />
            </Container>
            <Copyright />
        </Box>
    )
}
export default Footer;

const styles = {
    NavContainer: {
        justifyContent: "center",
        flexWrap: "wrap"
    }
}
