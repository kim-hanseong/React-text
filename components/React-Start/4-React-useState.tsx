//*** useState ***
//* state 의 첫번째 원소는 state 값 자체를 사용할 수 있고 두번째 값은 변경 값을 해당 할 수 있다. *
//* 클로저 ?  : 어떤 함수 내부에 선언된 함수가 함수의 실행이 종료된 이후에도 지역변수인 state 를 참조 할 수 있다는것. *

//* useState의 내부를 구현한 모습으로는 *
//* A. 애플리케이션 전체의 states 배열을 초기화한다 // 최초접근이면 빈 배열로 초기화한다. *
//* B. state 정보를 조회해서 현재 상태값이 있는지 확인하고 // 없으면 초기값으로 설정한다  or  state 의 값을 위에서 조회한 현재값으로 설정한다. *
//* C. 즉시실행 함수로 setter 를 만든다 현재 index 를 클로저로 가둬놔서 이후에도 동일한 index에 접근 가능하도록 한다. *
//* D. useState 를 쓸 때마다 index를 하나씩 추가한다 이 indx 는 setState 에서도 사영된다 // 결국 useState는 global 적으로 사용된다*

//※※※ 게으른 초기화 ※※※
//* 함수를 인수로 넣을 수 있는 경우이다. 이 경우 useStae초기값이 복잡하거나 무거운 연산을 포함하고 있을 때 사용하라고 돼 있다 *
//* 고로 이 초기화는 처음 state 가 만들어 질 때만 사용되며 이후 리랜더링이 발생되더라도 이 함수의 실행은 무시된다. *
//* useState 는 복잡한 계산식이 계속해서 리랜더링 될 가능성이 농후하기에 이걸 억제해야한다. *
//* 사용처 : filter , find , map 등 무거운 연산자를 실행 할 때 필요하다 *
//* 이거 결국 값을 안 만들다가 호출이 되거나 사용이 되야할 때 useState 안 함수가 실행되어야 할 때 까지 미루는게 게으른 초기화 *

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