/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import Link from 'next/link';
import Icons from 'Utilis/Icons';

function Navigation() {
    return (
        <Box sx={styles.Navigation}>
            <Link href="/home">
                <Box>
                    <Icons icon="ci:home-alt-outline" />
                    Home
                </Box>
            </Link>
            <Link href="/explore">
                <Box>
                    <Icons icon="fluent:apps-16-regular" />
                    Explore
                </Box>
            </Link>
            <Link href="/saved">
                <Box>
                    <Icons icon="fluent:bookmark-28-regular" />
                    Saved
                </Box>
            </Link>
            <Link href="/subscription">
                <Box>
                    <Icons icon="fluent:document-one-page-24-regular" />
                    Subscriptions
                </Box>
            </Link>
            <Link href="/message">
                <Box>
                    <Icons icon="fluent:mail-16-regular" />
                    Message
                </Box>
            </Link>
            <Link href="/settings">
                <Box>
                    <Icons icon="fluent:settings-16-regular" />
                    Settings
                </Box>
            </Link>
        </Box >
    )
}
export default Navigation;

const styles = {
    Navigation: {
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
    }
}
