async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const hello = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.responseText);
      }
      if (xhr.readyState === 4 && xhr.status < 200 && xhr.status > 299) {
        reject(xhr.responseText);
      }
    };
    xhr.send(null);
  });
  document.writeln(JSON.parse(hello).name);
  // end -->
}
const URL = 'http://localhost:3000/api';
fetchData(URL);
