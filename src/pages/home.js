/** @jsxImportSource theme-ui */
//Packages
import { Box, Grid, Container } from 'theme-ui';

//Components
import TabNav from 'Components/TabNav';
import Home from 'Sections/Home/Home';

//Redux Wrapper
import { wrapper } from "Redux/Store";
import { authCheck } from "Redux/Actions/authActions";
import { getAllNews } from "Redux/Actions/newsActions";

function home() {
    return (
        <Container>
            <Grid columns={[1, null, null, null, 2, '0.8fr 2.7fr']}>
                <Box>
                    <TabNav />
                </Box>
                <Box>
                    <Home />
                </Box>
            </Grid>
        </Container >
    )
}
export default home;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context) => {
            const auth = await store.dispatch(authCheck(context.req.cookies['token']));
            if (!auth) {
                return {
                    redirect: {
                        destination: "/",
                        permanent: false
                    }
                }
            }
            await store.dispatch(getAllNews(context.query.search ? context.query.search : "Food"));
        }
)