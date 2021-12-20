/** @jsxImportSource theme-ui */
import { Box, Grid, Flex, Image, Heading, Button, Text, Link } from 'theme-ui';

//Components
import CardHeading from './CardHeading';
import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function Headlines() {
    const { newses } = useSelector(state => state.allNews)
    return (
        <Box mb={5}>
            <CardHeading name="Today's Headlines" url="/" />
            <Grid columns={[1, null, null, null, 1, 3]}>
                {newses &&
                    newses.slice(0, 6).map((news, i) => (
                        <Flex sx={{ alignItems: 'center' }} key={i}>
                            <Box sx={styles.Image}>
                                <Image src={news.media} alt="news" />
                            </Box>
                            <Box sx={styles.Content}>
                                <Heading as="h3" sx={styles.Heading}>{news.title}</Heading>
                                <Flex sx={{ alignItems: "center", mb: "10px" }}>
                                    <Box sx={styles.Like}>
                                        <Icons icon="bx:bx-like" />{" "}
                                        23
                                    </Box>
                                    <Box sx={styles.Dislike}>
                                        <Icons icon="bx:bx-dislike" />{" "}
                                        56
                                    </Box>
                                </Flex>
                                <Flex sx={{ alignItems: "center" }}>
                                    <Button sx={styles.CategoryButton}>{news.topic}</Button>
                                    <Box sx={styles.time}>
                                        <Icons icon="ant-design:clock-circle-filled" />
                                        <Text as="span">
                                            {new Date(news.published_date).getHours() + ":" + new Date(news.published_date).getMinutes()}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    ))
                }
            </Grid>
        </Box>
    )
}
export default Headlines;

const styles = {
    Image: {
        flex: "0 0 30%",
        height: "100%",
        img: {
            borderRadius: "12px",
            width: "100%",
            height: "100%"
        }
    },
    Content: {
        flex: "0 0 70%",
        pl: "15px"
    },
    Heading: {
        fontSize: "16px",
        mb: "10px",
        color: "background_primary",
        letterSpacing: "0.3px",
        display: "-webkit-box",
        WebkitLineClamp: "1",
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
    },
    Like: {
        fontSize: "15px",
        mr: "20px",
        color: "text_Home_secondary",
        svg: {
            color: "red",
            fontSize: "19px",
            mb: "-3px"
        }
    },
    Dislike: {
        color: "text_Home_secondary",
        fontSize: "15px",
        svg: {
            fontSize: "19px",
            mb: "-4px"
        }
    },
    CategoryButton: {
        bg: "background_home_primary",
        py: "6px",
        px: "10px",
        textTransform: "uppercase",
        fontWeight: "heading",
        fontSize: "12px",
        color: "background_home",
        cursor: "pointer",
        flex: "0 0 50%"
    },
    time: {
        flex: "0 0 50%",
        textAlign: "right",
        fontSize: "14px",
        color: "text_Home",
        svg: {
            mr: "3px",
            fontSize: "14px",
            mb: "-2px"
        }
    }
}
