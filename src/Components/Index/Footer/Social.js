/** @jsxImportSource theme-ui */
import { Link, Flex } from 'theme-ui';

import Icons from 'Utilis/Icons';
import SocialData from 'data/SocialData';

function Social() {
    return (
        <Flex sx={{ mt: "2px" }}>
            {SocialData &&
                SocialData.map((social, i) => (
                    <Link key={i} href={social.path} sx={styles.Socials}>
                        <Icons icon={social.icon} />
                    </Link>
                ))
            }
        </Flex>
    )
}
export default Social;

const styles = {
    Socials: {
        mx: "20px",
        color: "text"
    }
}
