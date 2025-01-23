// 获取当前标签页的 URL，并设置为输入框的默认值
document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const currentUrl = tabs[0].url || ""; // 获取当前页面的 URL
      document.getElementById("urlInput").value = currentUrl; // 设置为输入框默认值
    }
  });
});

// 为按钮绑定点击事件
document.getElementById("openButton").addEventListener("click", () => {
  // 获取解析器
  const selectedPrefix = document.getElementById("prefixSelect").value;

  // 获取需要 vip 的 URL
  const userInput = document.getElementById("urlInput").value.trim();

  if (!userInput) {
    alert("输入网址(默认为当前网站网址):");
    return;
  }

  // 检查用户输入是否已包含前缀，防止重复添加
  const fullUrl = userInput.startsWith(selectedPrefix) ? userInput : selectedPrefix + userInput;

  // 打开新的标签页
  chrome.tabs.create({ url: fullUrl });
});
