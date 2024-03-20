// [InputSample.js]
// ```
// import React from 'react';

// function InputSample() {
//   return (
//     <div>
//       <input />
//       <button>초기화</button>
//       <div>
//         <b>값: </b>
//       </div>
//     </div>
//   );
// }

// export default InputSample;
// ```
// [APP.js]
// ```
// import React from 'react';
// import InputSample from './InputSample';

// function App() {
//   return (
//     <InputSample />
//   );
// }

// export default App;
// ```
// 초기화 버튼 누르면 초기화 되는 기본적인 Input 만들기

// [InputSample.js]
// ```
// import React, { useState } from 'react';

// function InputSample() {
//   const [text, setText] = useState('');

//   const onChange = (e) => {
//     setText(e.target.value);
//   };

//   const onReset = () => {
//     setText('');
//   };

//   return (
//     <div>
//       <input onChange={onChange} value={text}  />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: {text}</b>
//       </div>
//     </div>
//   );
// }

// export default InputSample;
// ```
// 이번에도, `useState` 를 사용합니다. 이번에는 input 의 `onChange` 라는 이벤트를 사용하는데요, 이벤트에 등록하는 함수에서는 이벤트 객체 `e` 를 파라미터로 받아와서 사용 할 수 있는데 이 객체의 `e.target` 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다. 이 DOM 의 `value` 값, 즉 `e.target.value` 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
// ## 멀티 input 관리
// [ InputSample.js]
// ```
// import React, { useState } from 'react';

// function InputSample() {
//   const onChange = (e) => {
//   };

//   const onReset = () => {
//   };


//   return (
//     <div>
//       <input placeholder="이름" />
//       <input placeholder="닉네임" />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         이름 (닉네임)
//       </div>
//     </div>
//   );
// }

// export default InputSample;
// ```
// 이렇게 쓸때 여러개의 useState로 사용하면 너무많은 낭비를 하게된다
// 더 좋은 방법으로
// [ InputSample.js]
// ```
// import React, { useState } from 'react';

// function InputSample() {
//   const [inputs, setInputs] = useState({
//     name: '',
//     nickname: ''
//   });

//   const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

//   const onChange = (e) => {
//     const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
//     setInputs({
//       ...inputs, // 기존의 input 객체를 복사한 뒤
//       [name]: value // name 키를 가진 값을 value 로 설정
//     });
//   };

//   const onReset = () => {
//     setInputs({
//       name: '',
//       nickname: '',
//     })
//   };


//   return (
//     <div>
//       <input name="name" placeholder="이름" onChange={onChange} value={name} />
//       <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         {name} ({nickname})
//       </div>
//     </div>
//   );
// }

// export default InputSample;
// ```
// 리액트 상태에서 객체를 수정해야 할 때는
// ```
// inputs[name] = value;
// ```
// 이렇게 하면 안되고
// ```
// setInputs({
//   ...inputs,
//   [name]: value
// });
// ```
// 새로운 객체를 만들어서 새로운 객체에 변화를 주고 이 상태를 사용해야한다
