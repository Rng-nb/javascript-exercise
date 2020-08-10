export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const result = collection.find(item => item.age <= 18);
  return result.name;
}
