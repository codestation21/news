//Packages
import { useEffect } from "react";
import { Box, Paragraph, Spinner } from "theme-ui";
//Components
import Heads from 'Utilis/Index/Heads';
import Header from 'Sections/Index/Header';
import Body from 'Sections/Index/Body';
import Footer from 'Sections/Index/Footer';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "Redux/Store";
import { authCheck } from "Redux/Actions/authActions";
import { getAllNews, getHeadlines } from "Redux/Actions/newsActions";

export default function Home() {
  const { message, loading } = useSelector(state => state.allNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews("Food"))
    dispatch(getHeadlines())
  }, [dispatch])
  return (
    <div>
      {message &&
        <Paragraph sx={styles.ErrorMessage}>
          {message}
        </Paragraph>
      }
      <Heads />
      <Header />
      {!message &&
        <>
          {loading &&
            <Box sx={{ textAlign: "center" }}>
              <Spinner sx={{ mt: "10rem" }} />
            </Box>
          }
          {!loading &&
            <Body />
          }
        </>
      }
      <Footer />
    </div>
  )
}

const styles = {
  ErrorMessage: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: "red"
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      await store.dispatch(authCheck(context.req.cookies['token']));
    }
)