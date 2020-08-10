export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const result = collection.filter(item => item.charAt(0) === '粤' && item.charAt(1) === 'A');
  return result.length;
}
