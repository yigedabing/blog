# 后台和内容脚本双向通信（一）

## 一、添加相关权限

```js
{
  "name": "谷歌扩展程序学习",
  "description": "谷歌各种api的学习及使用收集",
  "version": "1.2",
  "manifest_version": 3,
  "background": {
    "service_worker": "js/background.js",
    "type": "module"
  },
  "action": {
    "default_popup": "popup.html"
  },
  "icons": {
    "16": "assets/images/doctor_16.png",
    "32": "assets/images/doctor_32.png",
    "48": "assets/images/doctor_48.png",
    "64": "assets/images/doctor_64.png",
    "128": "assets/images/doctor_128.png"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["js/content-script.js", "js/reading-time.js"],
      "run_at": "document_idle"
    }
  ]
}
```

## 二、background.js 后台页面添加如下代码

```javascript
// 监听所有从内容脚本页面发送过来的信息
chrome.runtime.onMessage.addListener((message, sender, response) => {
  console.log("【background.js onMessage】", message);
  const { tab } = sender;
  if (tab.id && tab.active) {
    // 发送信息到内容脚本页面
    chrome.tabs.sendMessage(tab.id, {
      message: "我已经收到内容脚本的信息了！",
    });
  }
});
```

## 三、内容脚本页面（即注入到页面的 js 代码）

```js
// content-script.js;
// 监听当前tabs发送过来的信息
chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
});
// 向后台发送信息
chrome.runtime.sendMessage({
  type: "sendMessage2Background",
  host: location.origin,
});
```
