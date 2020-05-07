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

export const reviewTagOptions = [
  { value: "Tag1", label: "Tag1" },
  { value: "Tag2", label: "Tag2" },
  { value: "Tag3", label: "Tag3" },
  { value: "Tag4", label: "Tag4" },
  { value: "Tag5", label: "Tag5" },
  { value: "Tag6", label: "Tag6" },
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
      videoMimeType: "video/webm;codecs=vp8,opus",
    },
  },
};
