// [Counter.js]
// ```
// import React from 'react';

// function Counter() {
//   return (
//     <div>
//       <h1>0</h1>
//       <button>+1</button>
//       <button>-1</button>
//     </div>
//   );
// }

// export default Counter;
// ```
// [App.js]
// ```
// import React from 'react';
// import Counter from './Counter';

// function App() {
//   return (
//     <Counter />
//   );
// }

// export default App;
// ```
// 이 상태에서 이벤트 넣는 작업을 해볼겁니다.

// [Count.js]
// ```
// import React, { useState } from 'react';

// function Counter() {
//   const [number, setNumber] = useState(0);

//   const onIncrease = () => {
//     setNumber(number + 1);
//   }

//   const onDecrease = () => {
//     setNumber(number - 1);
//   }

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;
// ```
// 일 때 주의해야할건
// ```
// onClick={onIncrease()}
// ```
// 이처럼 호출식으로 불러버리면 리랜더링이 되어버립니다.
// onIncrease , onDecrease 를 눌러도 리랜더링이 되기에 0 으로 고정되게됩니다.
// 그러기에 호출이 아닌 표현식으로 써야합니다.
// ```
// import React, { useState } from 'react';

// function Counter() {
//   const [number, setNumber] = useState(0);

//   const onIncrease = () => {
//     setNumber(prevNumber => prevNumber + 1);
//   }

//   const onDecrease = () => {
//     setNumber(prevNumber => prevNumber - 1);
//   }

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;
// ```
// `onIncrease` 와 `onDecrease` 에서 `setNumber` 를 사용 할 때 그 다음 상태를 파라미터로 넣어준것이 아니라, 값을 업데이트 하는 함수를 파라미터로 넣어주었습니다.
// 이거 [prev] 가 건 값 컨트롤 할 수 있게 하는는