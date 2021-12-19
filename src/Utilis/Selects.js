/** @jsxImportSource theme-ui */
import { Select, Box } from 'theme-ui';

function Selects({ options }) {
    return (
        <Select
            arrow={
                <Box
                    as="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    sx={{
                        ml: -28,
                        alignSelf: 'center',
                        pointerEvents: 'none',
                    }}>
                    <path d="M1.175 10L5 13.7116L8.825 10L10 11.1482L5 16L0 11.1482L1.175 10Z" fill="black" />
                    <path d="M8.825 6L5 2.28841L1.175 6L0 4.85175L5 0L10 4.85175L8.825 6Z" fill="black" />
                </Box>
            }
            sx={styles.Select}
        >
            {options &&
                options.map((option, i) => (
                    <option key={i}>{option.name}</option>
                ))
            }
        </Select>
    )
}
export default Selects;

const styles = {
    Select: {
        border: "none",
        fontSize: "16px",
        fontWeight: "heading",
        cursor: "pointer",
        pr: "35px"
    }
}
