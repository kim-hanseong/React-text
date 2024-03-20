// 내가 만들려고 하는건 도서상품을 보여 줄 수 있는 홈페이지를 만드는것이다 .
// 이번에 내가 해보고싶은건 로그인 , 찜 목록, 구매 , 상품상세 , 검색목록 등 을 할 수 있는 프로젝트를 하려한다
//***  ***
// 이번 프로젝트에 사용된 라이브러리 와 언어로는
// typescript , tawilwind css , swiper slide , supabase , next ui , next js 등을 사용했다.

// 일단 DataBase 로 선택한 supabase 부터 사용해보려한다.
// npm install @supabase/supabase-js 설치하는 npm이다.

// supabase 도 다른 database 와 비슷하게 메소드를 돌리면 된다 .
// supabase 안에서 여러 테이블을 만들고 login 구현을 할 수 있지만 여기선 코드만 다룰것.
// 이 코드들은 module화 를 시켰기 때문에 어디서든 import 해서 사용가능하게 만들었다.

//※※※ 장바구니 ※※※
// *** supabase의 key 다 ***
// env 라는 파일 안에 넣어서 내부 정보를 보호 할 수 있다.
// const supabaseUrl = process.env.SUPABASE_URL || 'https://fmkmuelorbmymgkqkmen.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZta211ZWxvcmJteW1na3FrbWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NzQ0NzIsImV4cCI6MjAyMjQ1MDQ3Mn0.z8t-mc1vYD2qMqEnxbjCP6NBBVdYpxnfLCjPWa9L7XY'
// const supabase = createClient(supabaseUrl, supabaseKey)

//***  supabase 안에 있는 shop 이란 테이블을 가져옮 (장바구니 Data)***
// export async function ReadSupaBase() {
//     let { data: record, error } = await supabase
//         .from('Shop')
//*** select * 는 모든 데이터를 가져온다 ***
//         .select('*')
//     return { data: record, error }; // data 속성을 포함하는 객체 반환

// }
//***  supabase 안에 있는 shop 이란 테이블에 추가 (장바구니 Data)***
// export async function addSupaBase(item) {
// 데이터베이스에서 레코드를 가져옴
//     const { data: record, error } = await ReadSupaBase();
// 레코드에 title이 있는지 확인
//     const isTitleExist = record.some(recordItem => recordItem.title === item.title);
// title이 이미 존재한다면 추가하지 않고 에러 반환
//     if (isTitleExist) {
//         return { error: "Title already exists" };
//     }
// title이 존재하지 않는다면 데이터를 추가함
//     if (item.title.length > 0) {
//         const { data, error } = await supabase
//             .from('Shop')
//             .insert([
//                 { title: item.title, price: item.price, sale_price: item.sale_price, authos: item.authors, thumbnail: item.thumbnail, numbering: '1' }
//             ]);
//         return { data, error };
//     } else {
//         return { error: "Title is empty" }; // title 길이가 0인 경우 에러 반환
//     }
// }
//***  supabase 안에 있는 shop 이란 테이블에 삭제 (장바구니 Data)***
// 데이터 삭제 : 장바구니 삭제
// export async function deleteRecord(id) {
//     const { data, error } = await supabase.from('Shop').delete().eq("id", id)
//     ReadSupaBase()
//     return { data, error }; // data 속성을 포함하는 객체 반환
// }

//※※※ 로그인 ※※※
//***  로그인 APi : 깃허브 로그인  ***
// export async function signInGithub() {
//     let { error } = await supabase.auth.signInWithOAuth({
//         provider: "github",
//          * 제공하는 부분을 정할 수 있다  *
//         options: {
//             redirectTo: "/LoginPage",
//             redirectTo 는 신뢰 할 수 있는 page 즉 로그인 페이지를 정해야한다
//         },
//     });
// }
//***  로그인 APi : 카카오 로그인  ***
// export async function signInWithKakao() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'kakao',
//     })
//   }
//*** 로그인 확인 : 로그인 체크 유무 ***
// export async function checkLogin() {
//     const authInfo = await supabase.auth.getSession();
//     const session = authInfo.data?.session;
//     console.log(session)
        //* session 이 check 부분이다 *
//     if (session) {
//         console.log('로그인되어 있습니다.');
// 로그인된 상태에서 실행할 코드
//         window.location.href = '/mylist'
//     } else {
//         console.log('로그인되어 있지 않습니다.');
// 로그인되지 않은 상태에서 실행할 코드l
//         window.location.href = '/LoginPage'
//     }
//  * 이렇게 if 문으로 로그인의 체크유무를 알 수 있다. *
// };
//*** 로그아웃 : 로그인 되어 있으면 로그아웃  ***
// export async function signOut1() {
//     alert('로그아웃 되었습니다.')
//     let { error } = await supabase.auth.signOut()
//     window.location.href = '/'
// }
//*** KaKao API BOOKS  ***
//* 중요한 책 api다 이번 프로젝트에 있어선 무엇보다 중요하다. *
//* 내 프로젝트들의 대부분은 title 값을 여기로 보냄으로써 받아오는걸 기본으로 정해놨다. *
//* 그래서 이렇게 module화를 진행시켰다. *
// export async function KakaoBookSearch(e) {
//     const response = await fetch(`https://dapi.kakao.com/v3/search/book?target&query=${e}`, {
//         headers: {
//             Authorization: `KakaoAK e0407daa35ec0f411c944b9c12924f8e`,
//         },
//     });
//     const data = await response.json();
//     const Datalist = data.documents;
//     return Datalist;
// };
//*** 여긴 module 한걸 exports 해서 외부 tsx 에서 사용할 수 있게 만든것이다. ***
// module.exports = { ReadSupaBase , addSupaBase , deleteRecord , signInGithub ,checkLogin , signOut1 , signInWithKakao , KakaoBookSearch, CategoryBook, BuyRead ,buyShop }

