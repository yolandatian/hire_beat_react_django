export const numberOfQuestionOptions = [
  { value: 3, label: "3 Questions" },
  { value: 4, label: "4 Questions" },
  { value: 5, label: "5 Questions" },
];

export const lengthOfResponseOptions = [
  { value: 1, label: "1 minute" },
  { value: 2, label: "2 minutes" },
  { value: 3, label: "3 minutes" },
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

export var radialChartOptions = {
  // input : array of string for series.data;
  //         array of string for options.xaxis.categories
  series: [
    {
      name: "categories",
      data: ["80", "70", "70", "30"],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "radar",
    },
    title: {
      text: "Competency Map",
    },
    xaxis: {
      categories: ["January", "February", "March", "April"],
    },
  },
};

export const infillChartData = (dataString, categorieyString) => {
  var data = convertStringToArray(dataString);
  var categories = convertStringToArray(categorieyString);
  radialChartOptions.series[0].data = data;
  radialChartOptions.options.xaxis.categories = categories;
};

function convertStringToArray(s) {
  var a = [];
  var w = "";
  var i = 0;
  while (i != s.length) {
    if (s[i] != ",") {
      w = w + s[i];
    } else {
      a.push(w);
      w = "";
    }
    i++;
    if (i == s.length) {
      // append the last word
      a.push(w);
      break;
    }
  }
  return a;
}

export var radialBarOptions = {
  // input : int for series;
  //         int for options.label
  series: [80],
  options: {
    chart: {
      height: "150px",
      type: "line",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
          margin: 10,
          background: "#cbdbfa",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "40px",
            fontWeight: 600,
            color: "white",
            offsetY: 13,
          },
          value: {
            show: false,
          },
        },
      },
    },
    labels: [8],
  },
};

export const infillBarData = (scoreInt) => {
  radialBarOptions.series[0] = scoreInt * 10;
  radialBarOptions.options.labels[0] = scoreInt;
};
