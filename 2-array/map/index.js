export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const result = collection.map(item => String.fromCharCode(96 + item));
  return result;
}
