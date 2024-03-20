//* 검색 리스트 페이지를 만들어 볼 예정이다. *
//* 상품상세 페이지 만들기와 비슷하게 [slug] 를 이용할 예정 *
//* 일단 input 에서 해당 객체를 click 하면 focus 로 보내게 하엿고 *
//* input 에서 enter 를 누르면 Search 로 보내게 하였다. *

  // Input Enter Link
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       e.preventDefault(); // 기본 이벤트 취소
//       const searchValue = (e.target as HTMLInputElement).value; // 입력 필드의 값 추출
//       let url;
//       if (window.location.href.includes("Search")) {
//        * 현재 URL에 "Search"가 이미 포함되어 있다면 검색어만 추가  *
//         const baseUrl = window.location.href.split("Search")[0]; // "Search" 이전의 URL 부분을 가져옴
//         url = `${baseUrl}Search/${searchValue}`; // "Search/"와 검색어 추가
//       } else {
//        *현재 URL에 "Search"가 포함되어 있지 않다면 "Search/"와 검색어 추가  *
//         url = `Search/${searchValue}`;
//       }
//       window.location.href = url; // URL 변경
//     }
//   };

//* enter 를 누르면 search/[slug] 로 이동하게만 했더니 search 부분이 검색창에서 중복이 되기에 수정했다. *
