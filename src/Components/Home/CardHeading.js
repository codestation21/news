/** @jsxImportSource theme-ui */
import { Grid, Heading, Link } from 'theme-ui';

import Icons from 'Utilis/Icons';

function CardHeading({ name, url }) {
    return (
        <Grid columns={[2]} sx={styles.GridContainer}>
            <Heading sx={styles.Heading}>{name}</Heading>
            <Link href={url} sx={styles.SeeMore}>See All <Icons icon="dashicons:arrow-right-alt2" /></Link>
        </Grid >
    )
}
export default CardHeading;

const styles = {
    GridContainer: {
        mb: "20px",
        alignItems: "center"
    },
    Heading: {
        fontSize: ["15px", null, "18px", "20px"],
        color: "background_primary"
    },
    SeeMore: {
        textAlign: "right",
        color: "background_home",
        fontSize: ["13px", null, "14px", "15px"],
        fontWeight: "body",
        svg: {
            mb: "-2px"
        }
    }
}
