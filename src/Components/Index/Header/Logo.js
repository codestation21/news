/** @jsxImportSource theme-ui */
//Packages
import { Box, Heading, Link } from 'theme-ui';

//Icons components
import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function Logo() {
    const { success } = useSelector(state => state.auth);
    return (
        <Box sx={{ textAlign: ["center", null, null, "unset"] }}>
            {success &&
                <Box sx={styles.Logo}>
                    <Link href='/home'>
                        <Heading as="h2" sx={styles.LogoText}>Q</Heading>
                    </Link>
                </Box>
            }
            {!success &&
                <Box className="hshf" sx={styles.Account}>
                    <Link href="/signup">
                        <Icons icon="mdi:login" />{" "} Signup!
                    </Link>
                    <Link href="/login">
                        <Icons icon="mdi:account-box" /> Login!
                    </Link>
                </Box>
            }
        </Box >
    )
}
export default Logo;

const styles = {
    Logo: {
        bg: "backgriund_secondary",
        width: "45px",
        height: "45px",
        textAlign: "center",
        borderRadius: "50%",
    },
    LogoText: {
        position: "relative",
        top: "50%",
        transform: "translateY(-55%)",
        color: "text_tartiary"
    },
    AccountWidget: {
        position: "absolute",
        left: "0",
        width: "max-content",
        bg: "background_tartiary",
        textAlign: "left",
        top: "120%",
        padding: "15px 12px",
        boxShadow: "0 0 20px #00000030",
        borderRadius: "5px"
    },
    Account: {
        a: {
            mr: "15px",
            color: "text_Home_secondary",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "0.2s ease",
            cursor: "pointer",
            svg: {
                marginBottom: "-4px",
                fontSize: "20px",
                color: "backgriund_secondary"
            },
            '&:hover': {
                color: "backgriund_secondary",
                svg: {
                    color: "text_Home_secondary"
                }
            }
        }
    }
}
