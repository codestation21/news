/** @jsxImportSource theme-ui */
import { Box, Grid, Heading, Flex, Image, Text, Button } from 'theme-ui';

import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function News() {
    const { newses } = useSelector(state => state.allNews)
    return (
        <Box sx={{ mt: "1px" }}>
            <Grid gap={"2px"} columns={[1, null, 2, null, 1, 3]}>
                {newses &&
                    newses.slice(8, 17).map((news, i) => (
                        <Box key={i} sx={styles.CardBox}>
                            <Image sx={{ width: "100%", height: "230px" }} src={news.media} alt="news" />
                            <Box sx={styles.Category}>
                                <Heading as="h5">{news.topic}</Heading>
                            </Box>
                            <Box sx={styles.ContentBox}>
                                <Heading as="h3" sx={{ fontSize: "17px" }}>{news.title}</Heading>
                                <Flex sx={styles.ViewBox}>
                                    <Flex sx={styles.SingleView}>
                                        <Icons icon="fontisto:share-a" />
                                        <Text as="span">6</Text>
                                    </Flex>
                                    <Flex sx={styles.SingleView}>
                                        <Icons icon="zondicons:view-show" />
                                        <Text as="span">2</Text>
                                    </Flex>
                                    <Flex sx={styles.SingleView}>
                                        <Icons icon="zmdi:comments" />
                                        <Text as="span">34</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    )
}
export default News;

const styles = {
    CardBox: {
        position: "relative",
        bg: "background_tartiary",
        boxShadow: "0 0 25px #0000000f",
        mb: "2px",
        pb: "2.5rem"
    },
    Category: {
        position: "absolute",
        top: "5%",
        left: "5%",
        width: "max-content",
        py: "3px",
        bg: "backgriund_secondary",
        color: "text_tartiary",
        px: "10px",
        textTransform: "uppercase",
        fontWeight: "bold_primary",
        borderRadius: "1px",
    },
    ContentBox: {
        py: "9px",
        px: "1.2rem"
    },
    ViewBox: {
        alignItems: "center",
        position: "absolute",
        bottom: "5px",
        width: "100%"
    },
    SingleView: {
        flex: "0 0 33.33%",
        svg: {
            mr: "10px"
        }
    },
    Buttons: {
        width: "100%",
        mt: "2rem",
        textTransform: "uppercase",
        fontWeight: "bold_primary",
        color: "text_quaternary",
        fontSize: "15px",
        cursor: "pointer"
    }
}
