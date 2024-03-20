//* 상품상세 페이지를 만들기 *
//* 일단 내가 선택한 방법은 /focus 페이지를 만들고 그 후에 검색 결과를 보내는것이다.*
//* page 에는 /focus/[slug] 값을 준다. *

//* 이렇게 focus 후 title 을 보냄으로써 incoding 시킨 후*
{/* <Link href={`/focus/${(aBooks.title)}`}> */}

//* 받아온 slug 를 decoding 해서 받아온다. *
// const decodedString = decodeURIComponent(props.params.slug);

//* 그 후 받아온 slug 를 string 화 시켜서 kakaoApi 에 useEffect 로 마운트 시켜준다 *
// useEffect(() => {
    // const handleSearch = async () => {
    //   const results = await KakaoBookSearch(decodedString);
    //   setSearchResults(results);
    // };
//* 여긴 참고로 focus 된 책의 관련도서 목록 *
    // const handleSearch2 = async () => {
    //   const results = await KakaoBookSearch(SearchRelation);
    //   setSearchResults2(results);
    // };
    // handleSearch()
    // handleSearch2()
//   }, [ decodedString , SearchRelation]);

//* 연관 도서의 title 앞부분을 가져온 후 배열 첫번째를 제외하고 출력 *
// const SearchRelation = decodeURIComponent(props.params.slug).split(' ')[0];
