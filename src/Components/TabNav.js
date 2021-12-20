/** @jsxImportSource theme-ui */
import { Box, Container, Image, Button } from 'theme-ui';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import Link from "next/link";

//Image and SVG
import { Logout } from 'Utilis/svgs'
import Logo from 'Assets/logo.png';

//Componets
import Navigation from './TabNavs/Navigation';
import Subscription from './TabNavs/Subscription';


function TabNav() {
    const router = useRouter();
    const onLogout = () => {
        Cookies.remove('token', { path: '' });
        router.push("/")
    }
    return (
        <Container sx={styles.TabContainer}>
            <Box sx={styles.ScrollBar}>
                <Box sx={styles.Logo}>
                    <Link href="/">
                        <a><Image src={Logo} alt="Logo" /></a>
                    </Link>
                </Box>
                <Navigation />
                <Box sx={styles.LogoutBox}>
                    <Button sx={styles.Logout} onClick={onLogout}>
                        {Logout}
                        Logout
                    </Button>
                </Box>
                <Subscription />
            </Box>
        </Container >
    )
}
export default TabNav;

const styles = {
    TabContainer: {
        position: "fixed",
        bg: "background_tartiary",
        left: ["-100%", null, null, null, "0"],
        top: "0",
        width: ["unset", null, null, null, "45%", "22%"],
        boxShadow: "0 0 30px #00000029",
        borderRadius: "0 20px 20px 0",
        height: "100%",
        px: "15px",
        py: "30px",
    },
    ScrollBar: {
        overflowY: "auto",
        height: "100%",
        scrollbarWidth: "thin",
        '&::-webkit-scrollbar': {
            width: "8px",
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#C1C1C1",
            borderRadius: "20px",
        }
    },
    Logo: {
        width: "70%",
        mx: "auto",
        mb: "25px"
    },
    LogoutBox: {
        px: "15px",
        mt: "11rem",
        borderBottom: "2px solid #87878736",
        pb: '1.2rem',
        mr: '10px'
    },
    Logout: {
        fontSize: "17px",
        color: "text_Home",
        fontWeight: "bold",
        cursor: "pointer",
        svg: {
            width: "22px",
            mr: "10px",
            mb: "-6px"
        }
    }
}
