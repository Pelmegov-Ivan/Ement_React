var bod = document.querySelector(".motionDesign");
function scroll(bod) {
  if (!bod.hidden) {
    window.scrollBy(0, -3000);
  }
}
export default scroll;
