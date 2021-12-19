/** @jsxImportSource theme-ui */
import { Box, Flex, Image, Input, Button } from 'theme-ui';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

//Images
import LocationIcon from 'Assets/topbar/location.png';
import AnalysisIcon from 'Assets/topbar/pie-chart.png';
import CalendarImage from 'Assets/topbar/calendar.png';
import FilterImage from 'Assets/topbar/filter.png';
//Data
import { Locations, Analysis, Calendar } from 'data/TopBarData';
//Components (select & Icons)
import Selects from 'Utilis/Selects';
import Icons from 'Utilis/Icons';

function TopBar() {
    const router = useRouter();
    const onLogout = () => {
        Cookies.remove('token', { path: '' });
        router.push("/")
    }
    return (
        <Flex py={2} sx={{ alignItems: "center", mb: "2rem", flexWrap: "wrap" }}>
            <Box sx={{ flex: ["0 0 100%", null, "0 0 50%", null, "0 0 100%", "0 0 22%"], mb: ["15px", null, null, null, null, "unset"] }}>
                <Flex sx={{ alignItems: "center" }}>
                    <Image src={LocationIcon} alt="Location" sx={styles.Image} />
                    <Box sx={{ width: "100%" }}>
                        <Selects options={Locations} />
                    </Box>
                </Flex>
            </Box>
            <Box sx={{ flex: ["0 0 100%", null, "0 0 50%", null, "0 0 100%", "0 0 13%"], mb: ["15px", null, null, null, null, "unset"] }}>
                <Flex sx={{ alignItems: "center" }}>
                    <Image src={AnalysisIcon} alt="Analysis" sx={styles.Image} />
                    <Box sx={{ width: "100%" }}>
                        <Selects options={Analysis} />
                    </Box>
                </Flex>
            </Box>
            <Box sx={{ flex: ["0 0 100%", null, "0 0 50%", null, "0 0 100%", "0 0 10%"], mb: ["15px", null, null, null, null, "unset"] }}>
                <Flex sx={{ alignItems: "center" }}>
                    <Image src={CalendarImage} alt="Calendar" sx={styles.Image} />
                    <Box sx={{ width: "100%" }}>
                        <Selects options={Calendar} />
                    </Box>
                </Flex>
            </Box>
            <Box sx={{ flex: ["0 0 100%", null, "0 0 50%", null, "0 0 100%", "0 0 50%"], mb: ["15px", null, null, null, null, "unset"] }}>
                <Flex sx={styles.SearchBar}>
                    <Icons icon="ic:round-search" />
                    <Input placeholder="Search for Anything..." />
                    <Button sx={styles.Filter}>
                        <Image src={FilterImage} alt="Filter" />
                    </Button>
                </Flex>
            </Box>
            <Box sx={styles.Profile} onClick={onLogout}>
                <Icons icon="heroicons-outline:logout" />
            </Box>
        </Flex>
    )
}
export default TopBar;

const styles = {
    Image: {
        width: "12%"
    },
    SearchBar: {
        alignItems: "center",
        position: "relative",
        svg: {
            position: "absolute",
            left: "2%",
            top: "55%",
            transform: "translateY(-50%)",
            fontSize: "25px",
            color: "background_primary"
        },
        input: {
            bg: "background_tartiary",
            border: "none",
            py: "12px",
            px: "35px",
            boxShadow: "0 0 20px #00000012",
            color: "background_primary"
        }
    },
    Filter: {
        bg: "background_home",
        py: "10px",
        px: "12px",
        marginLeft: "20px",
        marginRight: "10px",
        img: {
            width: "100%"
        }
    },
    Profile: {
        textAlign: "right",
        svg: {
            fontSize: "35px",
            cursor: "pointer"
        }
    }
}
