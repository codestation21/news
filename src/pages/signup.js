/** @jsxImportSource theme-ui */
//Packages
import { useState, useEffect } from 'react';
import { Container, Box, Flex, Input, Button, Heading, Paragraph, Link, Spinner } from 'theme-ui';
import { useForm } from "react-hook-form";
// Icons Components
import Icons from 'Utilis/Icons';


//Redux
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CLEAR_ERROR } from "Redux/Constants/clearErrorConstant";
import { signUp } from "Redux/Actions/authActions";


function Signup() {
    const [show, setShow] = useState({
        pass: false,
        passConf: false
    });
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const password = watch("password", "");
    const dispatch = useDispatch();
    const router = useRouter();
    const onSubmit = (data, e) => {
        dispatch(signUp(data));
        e.target.reset();
    };
    const { loading, success, message } = useSelector(state => state.signup);
    const handleShow = (value) => {
        if (value === "password") {
            setShow({
                pass: !show.pass
            })
        } else {
            setShow({
                passConf: !show.passConf
            })
        }
    }
    useEffect(() => {
        if (!success) {
            if (message) {
                setError(true)
                setTimeout(() => {
                    setError(false)
                    dispatch({ type: CLEAR_ERROR })
                }, 5000)
            }
        } else if (success) {
            setSuccessMessage(true);
            setTimeout(() => {
                setSuccessMessage(false);
                dispatch({ type: CLEAR_ERROR })
                router.push('/home');
            }, 1000)
        }
    }, [dispatch, message, router, success])
    return (
        <Container sx={styles.Container} as="section">
            {error &&
                <Paragraph sx={styles.ErrorMessage}>{message}</Paragraph>
            }
            {successMessage &&
                <Paragraph sx={styles.SucceddMessage}>{message}</Paragraph>
            }
            <Box sx={styles.FormArea}>
                <Heading as="h3" sx={styles.Heading}>Signup</Heading>
                <Box as='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: "5rem" }}>
                    <Box sx={{ mb: "15px" }}>
                        <Flex sx={styles.InputBox}>
                            <Box sx={styles.IconBox}><Icons icon="fa:user" /></Box>
                            <Input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="css-2349n73by6"
                                {...register(
                                    "email",
                                    {
                                        required: "Please enter an email addreess!",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "The email you enter is invalid email!",
                                        },
                                    },
                                    { required: true }
                                )}
                            />
                        </Flex>
                        {errors.email && (
                            <Box sx={styles.Error}><Icons icon="bx:bxs-error" /> {errors.email.message}</Box>
                        )}
                    </Box>
                    <Box sx={{ mb: "15px" }}>
                        <Flex sx={styles.InputBox}>
                            <Box sx={styles.IconBox}><Icons icon="ic:round-lock" /></Box>
                            <Input
                                name="password"
                                id="password"
                                type={show.pass ? "text" : "password"}
                                placeholder="Password"
                                {...register(
                                    "password",
                                    {
                                        required: "You must specify a password",
                                        pattern: {
                                            value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                                            message: "Password must contain at least one letter and Number!"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters"
                                        },

                                    },
                                    { required: true }
                                )}
                            />
                            <Box onClick={() => handleShow("password")} sx={styles.Eye}>
                                {!show.pass &&
                                    < Icons icon="ant-design:eye-filled" />
                                }
                                {show.pass &&
                                    <Icons icon="ant-design:eye-invisible-filled" />
                                }
                            </Box>
                        </Flex>
                        {errors.password && (
                            <Box sx={styles.Error}><Icons icon="bx:bxs-error" /> {errors.password.message}</Box>
                        )}
                    </Box>
                    <Box sx={{ mb: "15px" }}>
                        <Flex sx={styles.InputBox}>
                            <Box sx={styles.IconBox}><Icons icon="mdi:lock-check" /></Box>
                            <Input
                                name="password_repeat"
                                type={show.passConf ? "text" : "password"}
                                placeholder="Confirm Password"
                                id="password_repeat"
                                {...register(
                                    "password_repeat",
                                    {
                                        validate: value =>
                                            value === password || "The passwords do not match"
                                    }
                                )}
                            />
                            <Box onClick={() => handleShow("passconfirm")} sx={styles.Eye}>
                                {!show.passConf &&
                                    < Icons icon="ant-design:eye-filled" />
                                }
                                {show.passConf &&
                                    <Icons icon="ant-design:eye-invisible-filled" />
                                }
                            </Box>
                        </Flex>
                        {errors.password_repeat && (
                            <Box sx={styles.Error}><Icons icon="bx:bxs-error" /> {errors.password_repeat.message}</Box>
                        )}
                    </Box>
                    <Box sx={styles.Submit}>
                        <Button type='submit'>
                            {!loading &&
                                "Signup"
                            }
                            {loading &&
                                <Spinner size={20} strokeWidth={3} />
                            }
                        </Button>
                    </Box>
                </Box >
                <Box sx={styles.Pencil}>
                    <Icons icon="fa-solid:pencil-alt" />
                </Box>
                <Box sx={styles.TextParagraph}>
                    <Paragraph>Already have account? <Link href="/login">Login</Link></Paragraph>
                </Box>
            </Box >
        </Container>
    )
}
export default Signup;

const styles = {
    Container: {
        position: "fixed",
        width: "100%",
        height: "100%"
    },
    FormArea: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        py: "45px",
        px: "25px",
        width: ["80%", null, "70%", "60%", "50%", null, "25%"],
        boxShadow: "0 0 20px #0000001f",
        borderRadius: "10px"
    },
    Heading: {
        position: "relative",
        mb: "30px",
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: "bold",
        color: "red",
        '&:after': {
            position: "absolute",
            content: '""',
            bg: "backgriund_secondary",
            width: "4px",
            top: "0",
            left: "-25px",
            bottom: "0"
        }
    },
    Pencil: {
        position: "absolute",
        right: ["-25px", null, "-30px", null, "-35px", "-40px"],
        top: ["20px", null, "25px", null, null, "30px"],
        bg: "backgriund_secondary",
        color: "text_tartiary",
        width: ["50px", null, "60px", null, "70px", "80px"],
        height: ["50px", null, "60px", null, "70px", "80px"],
        borderRadius: "50%",
        svg: {
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: ["20px", null, "25px", null, "30px", "35px"]
        }
    },
    InputBox: {
        bg: "background_tartiary",
        boxShadow: "0 0 20px #0000000f",
        borderRadius: "5px",
        position: "relative",
        input: {
            border: "none",
            fontSize: "16px",
            pr: "28px",
            '&:focus': {
                outline: "none"
            },
            '&.css-2349n73by6': {
                pr: "10px"
            }
        }
    },
    IconBox: {
        background: "#F13A30",
        color: "white",
        py: "10px",
        px: "15px",
        borderRadius: "5px 0 0 5px",
        svg: {
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    },
    Eye: {
        position: "absolute",
        right: "7px",
        top: "61%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        svg: {
            fontSize: "17px"
        }
    },
    Error: {
        mt: "6px",
        fontSize: "14px",
        color: "red",
        svg: {
            mb: "-2px"
        }
    },
    Submit: {
        mt: "35px",
        textAlign: "left",
        button: {
            bg: "backgriund_secondary",
            padding: "8px 15px",
            color: "text_tartiary",
            fontWeight: "bold",
            cursor: "pointer",
            width: "85px",
            height: "35px"
        }
    },
    TextParagraph: {
        mt: "15px",
        fontSize: "15px",
        p: {
            a: {
                color: "backgriund_secondary"
            }
        }
    },
    ErrorMessage: {
        background: "#F13A30",
        width: "max-content",
        margin: "0 auto",
        padding: "5px 10px",
        borderRadius: "5px",
        color: "white",
        marginTop: "2rem"
    },
    SucceddMessage: {
        background: "#2DA089",
        width: "max-content",
        margin: "0 auto",
        padding: "5px 10px",
        borderRadius: "5px",
        color: "white",
        marginTop: "2rem"
    }
}