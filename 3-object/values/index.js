export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let result = 0;
  Object.values(source).forEach(function sum(string) {
    result += Number.parseInt(string, 10);
  });
  return result;
}
