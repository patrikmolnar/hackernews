import { Item } from "../types/item";

const baseUrl = "https://hacker-news.firebaseio.com/v0";
const topStoriesUrl = `${baseUrl}/topstories.json`;

const getRandomStoryIds = (arr: [], count: number) => {
  let _arr = [...arr];
  return [...Array(count)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  );
};

export const fetchTopStories = async () => {
  const stories = await fetch(topStoriesUrl).then((topStories) =>
    topStories.json()
  );

  // fetch stories, get 10 randomly and return them
  const storyIds = getRandomStoryIds(stories, 10);

  return storyIds;
};

export const fetchItemsWithUsers = async (
  storyIds: number[]
): Promise<Item[]> => {
  const stories = await Promise.all(
    storyIds.map((id) =>
      fetch(`${baseUrl}/item/${id}.json`).then((story) => story.json())
    )
  );

  const users = await Promise.all(
    stories.map((story) =>
      fetch(`${baseUrl}/user/${story.by}.json`).then((user) => user.json())
    )
  );

  return stories
    .map((story) => ({
      ...story,
      user: users
        .map((user) => ({ id: user.id, karma: user.karma }))
        .find((user) => user.id === story.by),
    }))
    .sort((a, b) => a.score - b.score);
};
