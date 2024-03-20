//*** 카테고리 map 배열 ***
//* 배열을 하나 만들어서 id 와 title 을 만듦니다 *
//* supabase 테이블도 배열 id 와 같은 테이블이 4개 만들어놓고. *
// const backgroundClass = [
//     { id: 'category_ani', title: '애니메이션' },
//     { id: 'category_science', title: '과학' },
//     { id: 'category_travel', title: '여행' },
//     { id: 'category_cook', title: '요리' },
//     { id: 'category_stock', title: '주식' }
//   ]
//   export default function CategoryList() {
//***  SupaBase Data ***
//     const [data, setData] = useState<any[]>([]);
//***  Kakao Book Api Post ***
//     const [searchResults, setSearchResults] = useState<any[]>([]);
//     const [clickedIndex, setClickedIndex] = useState("category_ani");
//     const handleClick = (index: any) => {
//       setClickedIndex(index);
//     };
//* click 이 일어난 div 의 id 값을 handleClick 으로 넘김 >> *
// {backgroundClass.map((result, index) => (
//     <Card shadow="sm" key={index} isPressable style={{ overflow: 'visible' }} className="">
//       <CardBody style={{ overflow: 'visible' }} onClick={() => { handleClick(result.id) }} className={clickedIndex === result.id ? 'focus_category' : ''}>
//         <div key={index} className={`category_slide ${result.id} md:w-[200px] md:h-[125px] bg-white/5 dark:bg-default-400/10 backdrop-blur-lg rounded-large`}></div>
//       </CardBody>
//       <CardFooter className="text-small justify-between">
//         <b className="text-center mx-auto">{result.title}</b>
//       </CardFooter>
//     </Card>
//   ))}
//* 그러면 useEffect 안에 있는 *
//     useEffect(() => {
//       CategoryBook(clickedIndex).then(({ data: record, error }) => {
//         if (error) {
//           console.error("Error fetching data:", error);
//         } else {
//           setData(record as BookData[]);
//         }
//       });
//* 의존성 배열이 달라지기에 새로 이 카테고리 부분만 리랜더링이 되면서 *
//* 클릭한 id 의 카테고리를 넣는 title 로 재구성 되게 만듦  *
//     }, [clickedIndex]);
//     //  SupaBase => kakoApi
//     useEffect(() => {
//       const searchQueries = data.map((item) => item.title);
//       const handleSearch = async () => {
//         const results = await Promise.all(searchQueries.map((query) => KakaoBookSearch(query)));
//         setSearchResults(results);
//       };
//       handleSearch();
//* data 를 새롭게 받아오면서 새롭게 다시 구성 *
//     }, [data]);
//* 문제는 카테고리 안에 1, 2, 3, 4, 5 가 있다면 5 > 1 , 2 > 3 으로 간다 했을 때  *
//* 좀 더 최적화를 위해서 useCallback 을 사용해서 새로운 리스트를 데이터 사용 없이 가져오는게 더 낫지 않을까 란 생각 *
//* supabase 내부의 값만 바뀌면 언제든 원하는 리스트로 바꿀 수 있다는 장점. *