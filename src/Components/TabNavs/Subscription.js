/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Box, Button, Heading, Paragraph, Link as A, Image } from 'theme-ui';
import Icon from 'Assets/icon.png';
import Icons from 'Utilis/Icons';

function Subscription() {
    const [sub, setSub] = useState(false);
    const handleSub = () => {
        setSub(true)
    }
    return (
        <Box sx={styles.Subscription} className={sub ? "hide" : ""}>
            <Button onClick={handleSub} sx={styles.Close}>
                <Icons icon="fe:close" />
            </Button>
            <Image src={Icon} alt="Icons" sx={styles.ImageIcons} />
            <Heading as="h3" sx={styles.Heading}>SubScripe to our <br /> new plan <A href="/">$25</A></Heading>
            <Paragraph as="p" sx={styles.Paragraph}>It is a limited time offer that will expire soon.</Paragraph>
            <A href="/">
                <Button sx={styles.SubButton}>
                    Subscribe Now
                    <Icons icon="heroicons-solid:arrow-narrow-right" />
                </Button>
            </A>
        </Box>
    )
}
export default Subscription;

const styles = {
    Subscription: {
        bg: "background_tartiary",
        textAlign: "center",
        py: "30px",
        px: "8px",
        mx: "13px",
        boxShadow: "0 0 30px #0000002e",
        mt: "2rem",
        mb: "3rem",
        borderRadius: "20px",
        position: "relative",
        '&:after, &:before': {
            content: '""',
            position: "absolute",
            bg: "background_tartiary",
            width: "85%",
            height: "30px",
            left: "15%",
            bottom: "-15px",
            transform: "translateX(-8%)",
            borderRadius: "20px",
            zIndex: -1,
            boxShadow: "0 0 20px #0000001c"
        },
        "&:after": {
            bottom: "-28px",
            zIndex: -2,
            width: "75%",
            transform: "translateX(-11%)",
            left: "21%",
            boxShadow: "0 0 30px #0000002b"
        },
        "&.hide": {
            display: "none"
        }
    },
    Close: {
        position: "absolute",
        fontSize: "25px",
        right: "6%",
        top: "5%",
        cursor: 'pointer'
    },
    ImageIcons: {
        width: "40%",
        mb: "10px"
    },
    Heading: {
        fontSize: "23px",
        color: "background_primary",
        mb: "15px",
        a: {
            color: "text_Home_primary",
            textDecoration: "underline"
        }
    },
    Paragraph: {
        fontSize: "15px",
        px: "15px",
        mb: "20px"
    },
    SubButton: {
        bg: "background_home",
        py: "12px",
        px: "16px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "text_tartiary",
        borderRadius: "10px",
        cursor: 'pointer',
        svg: {
            ml: "8px",
            mb: "-5px",
            fontSize: "20px"
        }
    },

}