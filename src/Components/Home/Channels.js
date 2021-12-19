/** @jsxImportSource theme-ui */
import { Box, Grid, Heading, Link, Image } from 'theme-ui';
import Icons from 'Utilis/Icons';

import ChannelData from 'data/ChannelData';
import CardHeading from './CardHeading';


function Channels() {
    return (
        <Box>
            <CardHeading
                name="Explore Channels"
                url="/"
            />
            <Grid columns={[2, null, 3, 4, 2, 6]} gap={"22px"} pb={5}>
                {ChannelData &&
                    ChannelData.map((channel, i) => (
                        <Link href="/" key={i} sx={styles.Card}>
                            <Image src={channel.image} alt={channel.name} />
                            <Heading as="h4" sx={styles.Title}>{channel.name}</Heading>
                        </Link>
                    ))
                }
            </Grid>
        </Box >
    )
}
export default Channels;

const styles = {
    Card: {
        bg: "background_tartiary",
        textAlign: "center",
        py: "28px",
        px: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 20px #0000001a",
        position: "relative",
        pb: "50px"
    },
    Title: {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        bottom: "10%",
        color: "background_primary"
    }
}
