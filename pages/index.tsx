import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Title from "../components/Title/Title";
import TopStories from "../components/TopStories/TopStories";
import styles from "../styles/Home.module.css";
import { fetchTopStories } from "../utils/apiHelper";
interface Props {
  storyIds: number[];
}

const Home: NextPage<Props> = ({ storyIds }) => {
  return (
    <div>
      <Head>
        <title>Hacker News Next</title>{" "}
      </Head>
      <main className={styles.main}>
        <Title title="HackerNews" />
        <TopStories storyIds={storyIds} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const storyIds = await fetchTopStories();

  // show error page if fetching goes wrong
  if (!storyIds) {
    return {
      notFound: true,
    };
  }

  return { props: { storyIds } };
};

export default Home;
