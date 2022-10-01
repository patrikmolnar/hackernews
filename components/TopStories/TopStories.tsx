import { useEffect, useState } from "react";
import Image from "next/future/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { fetchItemsWithUsers } from "../../utils/apiHelper";
import { Item } from "../../types/item";
import styles from "./TopStories.module.css";
import Icon from "../Icon/Icon";

interface Props {
  storyIds: number[];
}

const TopStories: React.FunctionComponent<Props> = ({ storyIds }) => {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState<null | Item[]>(null);

  useEffect(() => {
    setLoading(true);
    fetchItemsWithUsers(storyIds).then((stories) => {
      setStories(stories);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!stories) return <p>{"No stories..:("}</p>;

  return (
    <div className={styles.container}>
      {stories.map((story) => (
        <div className={styles.storyContainer} key={story.id}>
          <div className={styles.avatar}>
            <Image
              id="dummyImage"
              alt="avatar"
              src="/cat.jpg"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.storyItem}>
            <h1 className={styles.storyTitle}>
              <a target="_blank" href={story.url}>
                {story.title}
              </a>
            </h1>
            <div style={{ display: "flex" }}>
              {/* user */}
              <div style={{ display: "flex", paddingRight: 15 }}>
                <Icon name="user" width={15} height={15} fill="white" />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 100,
                  }}
                >{`${story.by} (${story.user.karma} karma)`}</span>
              </div>
              {/* time */}
              <div style={{ display: "flex" }}>
                <Icon name="time" width={15} height={15} />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 100,
                  }}
                >
                  {formatDistanceToNow(new Date(story.time * 1000), {
                    includeSeconds: true,
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "center",
              textAlign: "center",
              flex: "1 1 0",
              color: "#4bffa5bf",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Icon
                name="triangle"
                width={40}
                height={40}
                color="#4bffa5bf"
                fill="#4bffa5bf"
              />
              <span>{story.score}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopStories;
