/** @jsxImportSource theme-ui */
import { Flex, Box, Image, Heading, Text } from 'theme-ui';

//Icons Components
import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function TopNews() {
    const { newses } = useSelector(state => state.allNews)
    return (
        <Flex sx={{ flexWrap: "wrap" }}>
            {newses &&
                newses.slice(0, 7).map((news, i) => (
                    <Box key={i} sx={styles.Card}>
                        <Image sx={styles.Images} src={news.media} alt="News" />
                        <Box sx={styles.NewsContent}>
                            <Heading as="h5" sx={styles.Category}>{news.topic}</Heading>
                            <Heading as="h3" sx={styles.Title}>{news.title}</Heading>
                            <Flex sx={styles.ViewBox}>
                                <Flex sx={styles.SingleView}>
                                    <Icons icon="fontisto:share-a" />
                                    <Text as="span">20</Text>
                                </Flex>
                                <Flex sx={styles.SingleView}>
                                    <Icons icon="zondicons:view-show" />
                                    <Text as="span">50</Text>
                                </Flex>
                                <Flex sx={styles.SingleView}>
                                    <Icons icon="zmdi:comments" />
                                    <Text as="span">10</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                ))
            }
        </Flex>
    )
}
export default TopNews;

const styles = {
    Card: {
        position: "relative",
        width: ["100%", null, "50%", null, null, '25%'],
        height: "235px",
        p: '1px',
        '&:nth-of-type(5)': {
            width: ["100%", null, null, null, null, '50%']
        }
    },
    Images: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    NewsContent: {
        position: "absolute",
        top: "1px",
        left: "1px",
        bottom: "1px",
        right: "1px",
        color: "text_tartiary",
        p: ["15px", "20px", null, "25px", "30px"],
        background: "#00000059"
    },
    Category: {
        bg: "backgriund_secondary",
        width: "max-content",
        py: "3px",
        px: "10px",
        textTransform: "uppercase",
        fontWeight: "bold_primary",
        borderRadius: "1px",
    },
    Title: {
        mt: "4rem",
        fontSize: "18px",
        fontWeight: "body",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
    },
    ViewBox: {
        alignItems: "center",
        mt: "3rem"
    },
    SingleView: {
        flex: "0 0 33.33%",
        svg: {
            mr: "10px"
        }
    }
}
