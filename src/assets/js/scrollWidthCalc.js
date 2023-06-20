function scrollWidthCalc() {
  const element = document.createElement("div");
  element.style.width = "50px";
  element.style.height = "50px";
  element.style.overflowY = "scroll";
  document.body.append(element);
  const width = element.offsetWidth - element.clientWidth;
  element.remove();
  return width;
}

export default scrollWidthCalc;
