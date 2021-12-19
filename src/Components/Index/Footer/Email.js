/** @jsxImportSource theme-ui */
import { Container, Box, Input } from 'theme-ui';

import Icons from 'Utilis/Icons';

function Email() {
    return (
        <Container px={["5px", null, "10px", "50px", "80px", "120px", "200px", "365px"]} py={[4, null, 5]}>
            <Box sx={styles.Emails}>
                <Input placeholder="Email address" />
                <Icons icon="akar-icons:arrow-right" />
            </Box>
        </Container>
    )
}
export default Email;

const styles = {
    Emails: {
        position: "relative",
        svg: {
            position: "absolute",
            right: "2%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "20px",
            color: "text_quaternary"
        },
        input: {
            borderColor: "#0000000d",
            p: "12px",
            fontSize: "15px",
            fontWeight: "bold"
        }
    }
}
