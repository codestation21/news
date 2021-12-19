/** @jsxImportSource theme-ui */
//Packages
import { Flex, Button } from 'theme-ui';

//Data
import NavData from 'data/NavData';

//Redux
import { useDispatch } from "react-redux";
import { getAllNews } from "Redux/Actions/newsActions";

function Navigation() {
    const dispatch = useDispatch();
    const onGetNews = (name) => {
        dispatch(getAllNews(name))
    }
    return (
        <Flex sx={styles.Navigation}>
            {NavData &&
                NavData.map((nav, i) => (
                    <Button key={i} onClick={() => onGetNews(nav.name)}>
                        {nav.name}
                    </Button>
                ))
            }
        </Flex>
    )
}
export default Navigation;

const styles = {
    Navigation: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        button: {
            mx: "12px",
            textDecoration: "none",
            cursor: "pointer",
            color: "text_primary",
            fontWeight: "heading"
        }
    }
}