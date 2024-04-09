//*** useCallback ***
//* useCallback 은 인수로 넘겨받은 콜백 자체를 기억한다 쉽게말해 useCallback은 특정 함수를 새로 만들지 않고 다시 재사용한다는 의미이다 *

// useCallback 은 useMemo와 비슷한 함수이다
// 리랜더링을 할 때 특정값을 변화하지않고 그대로 가져와서 재사용 할 때 필요하기 때문이다 .
// 재사용이 중요한 이유는 최적화를 위해서이다 리랜더링 할 때 모든 값이 다시 그려진다하면 가상DOM에서도
// 그리는 시간이 많이 걸리기에 최적화를 하기엔 안성맞춤인데 이게 API 값도 다시 안불러와도 되는건지 모르겠다.

// useCallback이란?
// useCallback은 메모이제이션된 콜백을 반환합니다.
// 즉, 특정 함수를 새로운 렌더링 사이클에서도 재사용할 수 있게 해줍니다.
// 이는 의존성 배열(dependency array)에 명시된 변수들 중 하나라도 변경되었을 때에만 함수가 다시 생성됩니다.
// 그렇지 않다면, 이전 렌더링에서 사용된 같은 함수를 재사용함으로써 성능 최적화에 도움을 줍니다.

//* p.210 *
//* memo를 이용해 컴포넌트를 메모이제이션 했지만 App 자식 컴포넌트 전체가 렌더링이 되고 있다. *
//* ChildComponent 에 memo 를 사용해 name, value , onChange 의 값을 모두 기억하고 이 값이 변경되지 않을땐 랜더링이 되지않도록 작성된 코드이다. *
//* 정상적인 흐름이라면 하나의 value 변경이 다른 함수의 변경에 영향을 줘선 안되지만 모든 app 컴포넌트가 변경이 일어나는 이유는 *
//* state값이 바뀌면서 app 컴포넌트가 리랜더링 되고 그때마다 onChange로 넘기는 함수가 재생성되고 있기 때문이다. *

//* 값의 메모이제이션을 위해 useMemo를 사용했다면 함수의 메모이제이션을 위해 사용하는것이 useCallback이다 *
//* useCallback 의 첫번째 인수는 함수 , 두번째 인수는 의존성 배열을 집어넣는다 useMemo와 마찬가지로 의존성 배열이 변경되지 않는 한 *
//* 함수를 재 생성 하지 않는다 *

//* 이렇게 함수의 재생성을 막아 불필요한 리소스 or 리랜더링을 방지하기 위해 만든것이 useCallback 이다. *

//*** useCallback 은 useMemo를 사용해서 구현 할 수 있다 !? ***
//* Memo 와 Callback 의 차이점은 메모이제이션을 하는 대상이 변수 or 함수 냐의 차이일 뿐이기에 다를것은 없지만 변동을 야기하지 않게 해준다 *
//* Callback 은 함수만 가능하며 memo 로 주기위해선 return()=>{} 처럼 함수 선언문을 사용해야한다. *



// import React, { useRef, useState, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: ''
//   });
//   const { username, email } = inputs;
//   const onChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       setInputs({
//         ...inputs,
//         [name]: value
//       });
//     },
//     [inputs]
//   );
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]);

//   const nextId = useRef(4);
//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };
//     setUsers(users.concat(user));

//     setInputs({
//       username: '',
//       email: ''
//     });
//     nextId.current += 1;
//   }, [users, username, email]);

//   const onRemove = useCallback(
//     id => {
//       // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//       // = user.id 가 id 인 것을 제거함
//       setUsers(users.filter(user => user.id !== id));
//     },
//     [users]
//   );
//   const onToggle = useCallback(
//     id => {
//       setUsers(
//         users.map(user =>
//           user.id === id ? { ...user, active: !user.active } : user
//         )
//       );
//     },
//     [users]
//   );
//   const count = useMemo(() => countActiveUsers(users), [users]);
//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;