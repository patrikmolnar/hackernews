import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fetchTopStories } from "../utils/apiHelper";

interface Props {
  topStories: number[];
}

const Home: NextPage<Props> = ({ topStories }) => {
  return (
    <div>
      <Head>
        <title>Hacker News Next</title>
        <meta
          name="description"
          content="Hacker News clone made with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hacker News</h1>
        {topStories.map((story) => (
          <p key={story}>{story}</p>
        ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const topStories = await fetchTopStories();

  // show error page if fetching goes wrong
  if (!topStories) {
    return {
      notFound: true,
    };
  }

  return { props: { topStories } };
};

export default Home;
