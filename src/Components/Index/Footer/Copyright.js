/** @jsxImportSource theme-ui */
import { Container, Box, Flex, Paragraph, Link } from 'theme-ui';

import Icons from 'Utilis/Icons';

function Copyright() {
    return (
        <Container px={["10px", null, "20px", "30px", 4, 7]} sx={styles.ContainerBox}>
            <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
                <Box sx={{ mr: ["0", "4rem"], mb: ["10px", null, null, "20px", "unset"] }}>
                    <Paragraph as="p" sx={styles.Copyright}>
                        <Icons icon="ant-design:copyright-circle-outlined" />
                        {new Date().getFullYear()}. Quantum UI Kit
                    </Paragraph>
                </Box>
                <Link href="/" sx={styles.PageLink}>
                    Privacy Policy
                </Link>
                <Link href="/" sx={styles.PageLink}>
                    Terms of Use
                </Link>
            </Flex>
        </Container>
    )
}
export default Copyright;

const styles = {
    ContainerBox: {
        py: "30px",
        borderTop: "1px solid #00000017"
    },
    Copyright: {
        fontSize: "16px",
        color: "text_quaternary",
        svg: {
            mr: "5px",
            mb: "-3px"
        }
    },
    PageLink: {
        mr: "4rem",
        color: "text_quaternary",
        fontSize: "16px",
        '&:nth-of-type(2)': {
            mr: "0"
        }
    }
}
