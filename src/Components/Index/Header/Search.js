/** @jsxImportSource theme-ui */
//Packages
import { useState } from 'react';
import { Box, Button, Input } from 'theme-ui';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

//Icons components
import Icons from 'Utilis/Icons';

//Redux
import { useSelector } from "react-redux";

function Search() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [search, setSearch] = useState(false);
    const { success } = useSelector(state => state.auth);
    const searchHandler = () => {
        setSearch(!search);
    }
    const router = useRouter();
    const onSubmit = (data, e) => {
        if (success) {
            router.push(`/home/?search=${data.search}`)
        }
    }
    return (
        <Box sx={{ position: "relative", textAlign: ['center', null, null, 'right'] }}>
            <Button sx={styles.Buttons} onClick={searchHandler} className={search ? "active" : ''}>
                {!search &&
                    <Icons icon="ic:outline-search" />
                }
                {search &&
                    <Icons icon="ic:outline-search-off" />
                }
            </Button>
            <Box className={search ? "active" : ''} sx={styles.SearchBar} as="form" onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Search" sx={styles.Input} {...register("search")} />
            </Box>
        </Box>
    )
}
export default Search;

const styles = {
    Buttons: {
        fontSize: '22px',
        position: 'relative',
        cursor: 'pointer',
        transition: '0.2s ease',
        '&.active': {
            color: 'text_primary'
        }
    },
    SearchBar: {
        visibility: 'hidden',
        opacity: "0",
        position: "absolute",
        bg: "background_tartiary",
        right: ["7%", "10%", "23%", "0"],
        width: ["15em", "16rem", "18rem", "20em"],
        transition: '0.2s ease',
        '&.active': {
            visibility: 'visible',
            opacity: '1'
        }
    },
    Input: {
        borderColor: "text_primary",
        padding: " ",
        fontSize: "15px"
    }
}
