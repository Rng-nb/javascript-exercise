// TODO 17: 在这里写实现代码
import Person from './person';

class Worker extends Person {
  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}
export default Worker;
