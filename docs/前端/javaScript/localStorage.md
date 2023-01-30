# JS | 监听 localStorage

重写 setItem 方法进行监听操作

```javaScript
var orignalSetItem = localStorage.setItem;

   localStorage.setItem = function(key,newValue){

       var setItemEvent = new Event("setItemEvent");
       setItemEvent.key=key;
       setItemEvent.newValue = newValue;
       window.dispatchEvent(setItemEvent);
       orignalSetItem.apply(this,arguments);
   }
```

## 使用案例

```js
const originSetItem = localStorage.setItem;

// 重写localStorage，添加自定义事件
localStorage.setItem = function (key, newValue) {
  const setItemEvent = new Event("setItemEvent");
  setItemEvent.key = key;
  setItemEvent.newValue = newValue;
  window.dispatchEvent(setItemEvent);
  originSetItem.apply(this, arguments);
};

// 先监听
window.addEventListener("setItemEvent", (e) => {
  console.log(e); // log {isTrusted: false, key: 'userInfo', newValue: {…}, type: 'setItemEvent', target: Window, …}
});

localStorage.setItem("userInfo", { id: 1, name: "张山", age: 18 });
```
