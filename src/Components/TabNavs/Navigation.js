/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import Link from 'next/link';
import Icons from 'Utilis/Icons';

function Navigation() {
    return (
        <Box sx={styles.Navigation}>
            <Link href="/home">
                <a>
                    <Box>
                        <Icons icon="ci:home-alt-outline" />
                        Home
                    </Box>
                </a>
            </Link>
            <Link href="/explore">
                <a>
                    <Box>
                        <Icons icon="fluent:apps-16-regular" />
                        Explore
                    </Box>
                </a>
            </Link>
            <Link href="/saved">
                <a>
                    <Box>
                        <Icons icon="fluent:bookmark-28-regular" />
                        Saved
                    </Box>
                </a>
            </Link>
            <Link href="/subscription">
                <a>
                    <Box>
                        <Icons icon="fluent:document-one-page-24-regular" />
                        Subscriptions
                    </Box>
                </a>
            </Link>
            <Link href="/message">
                <a>
                    <Box>
                        <Icons icon="fluent:mail-16-regular" />
                        Message
                    </Box>
                </a>
            </Link>
            <Link href="/settings">
                <a>
                    <Box>
                        <Icons icon="fluent:settings-16-regular" />
                        Settings
                    </Box>
                </a>
            </Link>
        </Box >
    )
}
export default Navigation;

const styles = {
    Navigation: {
        a: {
            textDecoration: "none",
            div: {
                mb: "3px",
                py: "12px",
                px: "10px",
                fontSize: "17px",
                fontWeight: 700,
                color: "text_Home",
                borderRadius: "12px",
                cursor: 'pointer',
                svg: {
                    fontSize: "25px",
                    mr: "10px",
                    mb: "-4px"
                }
            }
        },

    }
}
