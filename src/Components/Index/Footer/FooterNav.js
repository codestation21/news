/** @jsxImportSource theme-ui */
import { useState, useRef, useEffect } from 'react';
import { Flex, Link, Box } from 'theme-ui';

import FooterNavData from 'data/FooterNavData';
import Icons from 'Utilis/Icons';


function FooterNav() {
    const ref = useRef();
    const [submenu, setSubmenu] = useState(false);
    const handleMenu = () => {
        setSubmenu(!submenu)
    }
    useOnClickOutside(ref, () => setSubmenu(false));
    return (
        <Flex ref={ref} sx={{ flexWrap: "wrap", justifyContent: ["center", null, "unset"], mb: ["10px", null, null, "20px", "unset"] }}>
            {FooterNavData &&
                FooterNavData.map((nav, i) => (
                    <Link key={i} href={nav.path} sx={styles.NavLink}
                        onClick={i === 0 ? handleMenu : ''}
                        className={submenu ? "active" : ''}
                    >
                        {nav.name}
                        {nav.icon &&
                            <Icons icon={nav.icon} />
                        }

                        {nav.categories &&
                            <Box sx={styles.SubMenu} className={submenu ? "active" : ''}>
                                {nav.categories &&
                                    nav.categories.map((category, i) => (
                                        <Link sx={styles.SubMenuLink} key={i} href={category.path}>{category.name}</Link>
                                    ))
                                }
                            </Box>
                        }
                    </Link>
                ))
            }
        </Flex>
    )
}
export default FooterNav;
function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

const styles = {
    NavLink: {
        mx: "20px",
        color: "text",
        fontWeight: "heading",
        cursor: "pointer",
        position: "relative",
        svg: {
            ml: "5px",
            mb: "-3px",
            transition: "0.2s ease",
        },
        '&.active': {
            svg: {
                transform: 'rotate(180deg)'
            }
        }
    },
    SubMenu: {
        position: "absolute",
        bg: "background_tartiary",
        width: "125px",
        py: "5px",
        px: "13px",
        left: "15%",
        top: "115%",
        boxShadow: "0 0 20px #00000024",
        visiblity: 'hidden',
        opacity: "0",
        transition: "0.2s ease",
        zIndex: "9",
        '&.active': {
            visiblity: 'visible',
            opacity: "1",
        }
    },
    SubMenuLink: {
        display: "block",
        color: "text",
        my: "8px"
    }
}
