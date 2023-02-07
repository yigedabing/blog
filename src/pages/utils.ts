export function writeOneByOne(text, dom, container, opt) {
  const el = document.createElement(dom);
  const bar = document.createElement("span");
  bar.className = "write-vertical-bar";
  el.appendChild(bar);
  container.appendChild(el);

  let timer = null;
  let currentIndex = 0;
  const sleep = opt.sleep || 0;

  return new Promise((resolve) => {
    function next() {
      const textNode = document.createTextNode(text[currentIndex]);
      el.insertBefore(textNode, bar);
      currentIndex++;

      if (currentIndex < text.length) {
        timer = setTimeout(() => {
          next();
        }, 100);
      } else {
        timer = setTimeout(() => {
          el.removeChild(bar);
          clearTimeout(timer);
          resolve(null);
        }, sleep);
      }
    }

    next();
  });
}
