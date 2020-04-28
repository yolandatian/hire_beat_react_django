export let videoList = [];
export let questionList = [];

const sources = {
  sintelTrailer: "https://test-hb-videos.s3.amazonaws.com/1588036218976.webm",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm",
};

let question0 = {
  id: 0,
  title: "q0",
  q: "What is your fav color",
};

let question1 = {
  id: 1,
  title: "q1",
  q: "What is your fav movie",
};

let question2 = {
  id: 2,
  title: "q2",
  q: "What is your fav song",
};

let video0 = {
  id: 0,
  title: "v0",
  url: sources.sintelTrailer,
  created_at: "2020",
};

let video1 = {
  id: 1,
  title: "v1",
  url: sources.bunnyMovie,
  created_at: "2021",
};

let video2 = {
  id: 2,
  title: "v2",
  url: sources.bunnyTrailer,
  created_at: "2022",
};

export function loadMockData() {
  videoList = [];
  questionList = [];
  videoList.push(video1);
  videoList.push(video2);
  videoList.push(video0);
  questionList.push(question0);
  questionList.push(question1);
  questionList.push(question2);
}
