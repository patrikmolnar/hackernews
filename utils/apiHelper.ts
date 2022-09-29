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

export const fetchItems = (storyIds: number[]) =>
  Promise.all(
    storyIds.map((id) =>
      fetch(`${baseUrl}/item/${id}.json`).then((story) => story.json())
    )
  );

export const fetchUser = (userName: string) =>
  fetch(`${baseUrl}/user/${userName}.json`).then((user) => user.json());
