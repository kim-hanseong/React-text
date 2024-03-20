// useCallback 은 useMemo와 비슷한 함수이다
// 리랜더링을 할 때 특정값을 변화하지않고 그대로 가져와서 재사용 할 때 필요하기 때문이다 .
// 재사용이 중요한 이유는 최적화를 위해서이다 리랜더링 할 때 모든 값이 다시 그려진다하면 가상DOM에서도
// 그리는 시간이 많이 걸리기에 최적화를 하기엔 안성맞춤인데 이게 API 값도 다시 안불러와도 되는건지 모르겠다.

// useCallback이란?
// useCallback은 메모이제이션된 콜백을 반환합니다.
// 즉, 특정 함수를 새로운 렌더링 사이클에서도 재사용할 수 있게 해줍니다.
// 이는 의존성 배열(dependency array)에 명시된 변수들 중 하나라도 변경되었을 때에만 함수가 다시 생성됩니다.
// 그렇지 않다면, 이전 렌더링에서 사용된 같은 함수를 재사용함으로써 성능 최적화에 도움을 줍니다.


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