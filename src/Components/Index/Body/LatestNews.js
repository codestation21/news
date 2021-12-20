/** @jsxImportSource theme-ui */
import { Box, Paragraph, Heading, Flex, Text, Spinner, Button } from 'theme-ui';

//Icons Components
import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function LatestNews() {
    const { newses } = useSelector(state => state.allNews)
    return (
        <Box sx={styles.LatestNews}>
            <Flex sx={styles.Heading}>
                <Heading as="h5">Latest News</Heading>
                <Box sx={styles.DotIcon}>
                    <Icons icon="ph:dots-three-bold" />
                </Box>
            </Flex>
            <Box sx={styles.CardHolder}>
                {newses &&
                    newses.map((headline, i) => (
                        <Box key={i} sx={styles.NewsCard}>
                            <Heading as="h3" sx={styles.NewsTitle}>{headline.title}</Heading>
                            <Text as="span" sx={styles.NewsTime}>
                                {new Date(headline.published_date).getHours() + ":" + new Date(headline.published_date).getMinutes()}
                            </Text>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
export default LatestNews;

const styles = {
    LatestNews: {
        mt: "25px",
        position: "relative"
    },
    Heading: {
        alignItems: "center",
        mb: "4px",
        bg: "background_tartiary",
        py: "10px",
        px: "20px",
        pr: "10px",
        boxShadow: "0 0 20px #0000000f",
        h5: {
            flex: "0 0 70%",
            fontSize: "20px",
            color: "text"
        }
    },
    DotIcon: {
        flex: "0 0 30%",
        textAlign: "right",
        fontSize: "23px",
        mb: "-8px",
        svg: {
            color: "text_secondary"
        }
    },
    CardHolder: {
        overflowY: "scroll",
        height: "59em",
        scrollbarWidth: "thin",
        '&::-webkit-scrollbar': {
            width: "8px",
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#C1C1C1",
            borderRadius: "20px",
        }
    },
    NewsCard: {
        bg: "background_tartiary",
        py: "30px",
        px: "20px",
        my: "4px",
        boxShadow: "0 0 25px #0000000f"
    },
    NewsTitle: {
        fontSize: "17px",
        mb: "10px",
        mt: "10px"
    },
    NewsTime: {
        fontSize: "16px",
        color: "text_secondary"
    },
    Buttons: {
        bg: "background_tartiary",
        width: "100%",
        py: "20px",
        fontSize: "17px",
        boxShadow: "0 0 25px #0000000f",
        cursor: "pointer"
    },
    ErrorMessage: {
        position: "absolute",
        textAlign: "center",
        left: "50%",
        top: "100%",
        transform: "translate(-50%, -50%)",
        color: "red"
    }
}
