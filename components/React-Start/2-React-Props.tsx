import React from 'react';
// 이렇게 import 해와서 MainPager 을 사용 할 수 있습니다.
import MainPager from './1-React';

// function App() {
//   return (
//     <Hello name="react" />
//   );
// }


// import React from 'react';
// function Hello(props) {
    // return <div>안녕하세요 {props.name}</div>
//   }
//   
//   export default Hello;

//  이런 식으로 다른 tsx 에 있는 정보를 사용 할 수 도 있습니다
//  위 처럼 사용하게 된다면 안녕하세요 react 가 됩니다.

// function App() {
//     return (
//       <Hello name="react" color="red"/>
//     );
//   }

// import React from 'react';

// function Hello(props) {
//   return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
// }

// export default Hello;

// 이런식으로 비구조화 할당을 통해 여러개의 props 또한 다른 tsx 에서 조정이 가능합니다.

// import React from 'react';
// function Hello({ color, name }) {
    // return <div style={{ color }}>안녕하세요 {name}</div>
//   }
//   
//   Hello.defaultProps = {
    // name: '이름없음'
//   }
//   
//   export default Hello;

//  이렇게 값이 없다면 '이름없음' 으로 될 수 있게 만들 수 있습니다.


// function Wrapper() {
//     const style = {
//       border: '2px solid black',
//       padding: '16px',
//     };
//     return (
//         <div style={style}>
//           </div>
//         )
//     }
// function App() {
//     return (
//       <Wrapper>
//         <Hello name="react" color="red"/>
//         <Hello color="pink"/>
//       </Wrapper>
//     );
//   }
//  이렇게 적용하면 Hello 안에 있는 값들 은 적용이 되질 않습니다.  
  
// function Wrapper({ children }) {
//     const style = {
//       border: '2px solid black',
//       padding: '16px',
//     };
//     return (
//       <div style={style}>
//         {children}
//       </div>
//     )
//   }
// 이렇게 children 을 넣어야만 활성화가 됩니다.