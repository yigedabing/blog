import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "../css/styles.css";
import "tailwindcss/tailwind.css";

function writeOneByOne(text, dom, container, opt) {
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

export default class Home extends React.Component {
  state = {};

  render(): React.ReactNode {
    return (
      <Layout>
        <div className={clsx(styles.mainBox)}>
          <div>
            <HomepageHeader />
          </div>
          <div>
            <ContentRight />
          </div>
        </div>
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    );
  }

  async componentDidMount() {
    const home = document.querySelector("#htmlS");
    await writeOneByOne("嗨哟。", "h2", home, { interval: 150, sleep: 300 });
    await writeOneByOne("我是 一个小兵，", "h4", home, {
      interval: 150,
      sleep: 300,
    });
    await writeOneByOne("一名大龄前端开发工程师。", "p", home, { sleep: 400 });
  }
}

function HomepageHeader() {
  return (
    <div className={clsx(styles.content)}>
      <div id="htmlS" className={clsx(styles.contentBox)}></div>
      <div className={clsx(styles.contentBoxRight)}></div>
    </div>
  );
}

function ContentRight() {
  return <div className="text-purple-600">你好</div>;
}
