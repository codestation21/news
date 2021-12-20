/** @jsxImportSource theme-ui */
import { Grid, Box, Link, Image, Button, Flex, Text, Heading } from 'theme-ui';

//Components
import CardHeading from './CardHeading';
import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function News() {
    const { newses } = useSelector(state => state.allNews)
    return (
        <Box mb={4}>
            <CardHeading name="Featured News" url="/" />
            <Grid columns={[1, null, null, 2, 1, 3]}>
                {newses &&
                    newses.map((news, i) => (
                        <Box key={i} sx={{ mb: "10px" }}>
                            <Box sx={styles.Image}>
                                <Image src={news.media} alt="news" />
                            </Box>
                            <Flex sx={{ alignItems: "center" }}>
                                <Heading as="h3" sx={styles.Title}>{news.title}</Heading>
                                <Box sx={{ flex: 1, textAlign: "right" }}>
                                    <Button sx={styles.ChannelButton}>{news.topic}</Button>
                                    <Box sx={styles.Time}>
                                        <Icons icon="ant-design:clock-circle-filled" />
                                        <Text as="span">
                                            {new Date(news.published_date).getHours() + ":" + new Date(news.published_date).getMinutes()}
                                        </Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    )
}
export default News;

const styles = {
    Image: {
        height: "200px",
        mb: "10px",
        img: {
            width: "100%",
            height: "100%",
            borderRadius: "12px"
        }
    },
    Title: {
        flex: "0 0 60%",
        fontSize: "16px",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        letterSpacing: "0.1px",
        color: "background_primary"
    },
    ChannelButton: {
        background: "background_home_primary",
        py: "6px",
        pl: "10px",
        textTransform: "uppercase",
        fontWeight: "medi_bold",
        fontSize: "12px",
        color: "background_home",
        cursor: "pointer",
        marginBottom: "8px",
        flex: "0 0 40%",
        textAlign: "right"
    },
    Time: {
        fontSize: "14px",
        color: "text_Home",
        textAlign: "right",
        svg: {
            mr: "3px",
            fontSize: "14px",
            mb: "-2px"
        }
    }
}
