export const numberOfQuestionOptions = [
  { value: 2, label: "2 Questions" },
  { value: 3, label: "3 Questions" },
  { value: 5, label: "5 Questions" },
];

export const lengthOfResponseOptions = [
  { value: 1, label: "1 minute" },
  { value: 2, label: "2 minutes" },
  { value: 3, label: "3 minute3" },
];

// The length changes
export var videoRecorderOptions = {
  controls: true,
  width: 640,
  height: 480,
  fluid: false,
  plugins: {
    record: {
      audio: true,
      video: true,
      maxLength: 60,
      debug: true,
    },
  },
};
