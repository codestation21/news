/** @jsxImportSource theme-ui */
//Packages
import { Flex } from 'theme-ui';
import Link from 'next/link';

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
                    <Link href={nav.path} key={i}>
                        <a onClick={() => onGetNews(nav.name)}>
                            {nav.name}
                        </a>
                    </Link>
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
        a: {
            mx: "12px",
            textDecoration: "none",
            color: "text_primary",
            fontWeight: "heading"
        }
    }
}