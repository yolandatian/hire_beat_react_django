export default function safariAlert() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    alert("Incompatible Browser.\nPlease try Chrome or Firefox.");
  }
}
