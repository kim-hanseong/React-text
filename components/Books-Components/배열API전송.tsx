//* seqrchQueries 라는 배열을 만들어 보내면  *
//   const searchQueries = ["미래법정", "금단의마술", "퓨처 셀프", "돈의 속성"];
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const handleSearch = async () => {
//* kakaoApi 로 전부 보낸 후  awaite promis.all 로 모든 API를 받아올 때 까지 기다린 뒤 setSearchResults 에 포함 시켜  *
//* 해당 값을 출력 할 수 있게 만든다 *
//     const results = await Promise.all(searchQueries.map((query) => KakaoBookSearch(query)));
//     setSearchResults(results);
//   };

//* 해당 state로 map 배열을 만들어 해당 객체를 리스트로 만든다  *
//   {searchResults.map((result, index) => (
//* result 는 해당 객체 값이며 index 는 key 값을 빌미로 만든것 *
//* ...result[0] 로 해당 일개의 값이 아니라 searchResults 에 있는 모든 값을 출력시키기 위해서며 *
//* [0]을 만든 이유는 kakaoApi를 받아올 때 해당객체와 비슷한 이름까지 모두 가져오기에 가져온 배열 중 검색결과가 제일 잘 맞는 첫번째 배열을 *
//* 쓰기 위해서 *
//     <BookCard {...result[0]} key={index} />
//   ))}