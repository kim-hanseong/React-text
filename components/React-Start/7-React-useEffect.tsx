// import React, { useEffect } from 'react';

// function User({ user, onRemove, onToggle }) {
//   useEffect(() => {
//     console.log('컴포넌트가 화면에 나타남');
//     return () => {
//       console.log('컴포넌트가 화면에서 사라짐');
//     };
//   }, []);
//   return (
//     <div>
//       <b
//         style={{
//           cursor: 'pointer',
//           color: user.active ? 'green' : 'black'
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// function UserList({ users, onRemove, onToggle }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User
//           user={user}
//           key={user.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// }

// export default UserList;

// use Effct 는 대부분 화면이 처음 마운트(등장) 할 때 쓰입니다 .
// 대표적인 예시로는 외부 api 요청 , 라이브러리 사용 등 처음 함수로 가져와야하는 값들은 useEffect 를 사용해서 가져와야합니다.
// 그리고 useEffect 는 마지막에 [] 빈 배열을 써야하는데 이것이 의존성 배열입니다.
// 예를 들어 useState [test , setTest] = useState() 가 있으며
// const [data, setData] = useState<ApiBookData[]>([]);
// // Modal
// const { isOpen, onOpen, onOpenChange } = useDisclosure();
// //  SupaBase Read
// useEffect(() => {
//     ReadSupaBase().then(({ data: record, error }) => {
//         if (error) {
//             console.error("Error fetching data:", error);
//         } else {
//             setData(record as ApiBookData[]);
//         }
//     });
// }, [data]);
// 이렇게 되어있다면 data 의 변동이 일어날때마다 useEffect 는 다시 마운트 하여 최신 상태로 상태값을 유지합니다.
// 대충 빈 배열이면 새로고침을 하지 않는 이상 리랜더링이 일어나지않으며 최신상태로 유지하려면 기존 html 상태와 비슷한 상태에 놓이게 됩니다.
