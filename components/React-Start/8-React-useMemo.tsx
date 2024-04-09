//*** useMemo ***
//* useMemo 는 비용이 큰연산에 대한 결과를 저장 해놓고 이 저장된 값을 반환하는 훅이다 리액트에서 최적화를 담당한다 볼 수 있다 . *
//* 첫번째 인수로는 어떠한 값을 반환하는 생성함수를 두번째 인수로는 해당 함수가 의존하는 값의 배열을 전달한다. *

//* p.209 *
//* useMemo 의 의존성 배열인 value 가 변경되지 않는 이상 다시 리랜더링이 되지않는다는걸 알 수 있다  *

// 이번에는 성능 최적화를 위하여 연산된 값을 useMemo라는 Hook 을 사용하여 재사용하는 방법을 알아보도록 하겠습니다.
// App 컴포넌트에서 다음과 같이 countActiveUsers 라는 함수를 만들어서, active 값이 true 인 사용자의 수를 세어서 화면에 렌더링을 해보세요.

// useMemo 에 관해서 공부해볼 예정이다import React, { useRef, useState } from 'react';
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
//   const onChange = e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   };
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
//   const onCreate = () => {
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
//   };

//   const onRemove = id => {
// user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
// = user.id 가 id 인 것을 제거함
//     setUsers(users.filter(user => user.id !== id));
//   };
//   const onToggle = id => {
//     setUsers(
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   };
//   const count = countActiveUsers(users);
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