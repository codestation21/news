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
import { getAllNews } from "Redux/Actions/newsActions";

export default function Home() {
  const { message, loading } = useSelector(state => state.allNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews())
  }, [dispatch])
  return (
    <div>
      <Heads />
      <Header />
      {message &&
        <Paragraph sx={styles.ErrorMessage}>
          {message}
        </Paragraph>
      }
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
    pt: "8rem",
    color: "red",
    textAlign: "center"
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {
      await store.dispatch(authCheck(context.req.cookies['token']));
    }
)