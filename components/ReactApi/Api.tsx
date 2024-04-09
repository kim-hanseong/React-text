// //***  renderToString  ***
// function 2024-03 - 21() {
//     return (
//         <div>
//             <Childe furuits={['apple', 'banna']} />
//         </div>
//     );
// }
// const result = ReactDomServer.renderToString(
//     React.creatElement('div', { id: 'root' }, 2024-03 - 21)
// )
// // 
// //* React 요소를 html 로 변환시켜줌 *
// //* useEffect , uesState 등 마운트 될 때 함수들은 포함되지 않음 개별로 줘야함 *

// //***  renderToStaticMarkup  ***
// //* 위 renderToString 과 비슷하지만 react 로 쓸 때 나오는 추가적인 DOM 을 생성하지않아  *
// //* renderToString 보다 크기를 조금이라도 줄일 수 있다. *

// //*** renderToNodeStream ***
// //* 위 renderToString 과 같게 작동하지만 차이점이 있다, *
// //* renderToString 으로 받아 올 수 있는 양이 너무나도 클 때  ex) 유튜브 동영상 *
// //* 그럴 때 그 유튜브 동영상의 용량을 줄여 먼저 청크단위로 분해한 뒤 받아온 데이터 순으로 *
// //* 동영상으로 만드는 것. 이것도한 html 의 양을 줄 일 수 있다. *
// //* 또한 이 NodeStream 은 브라우저에서 사용 x *
// //* 스트림은 순차적인 데이터 분해 후 > 들어옴 *
// //* toString 은 전부 데이터 화 후 받아옴 고로 스트림을 더 많으 씀 node 에도 덜 부담  *

// //*** renderToStaticNodeStream  ***
// //* 해당 객체는 renderToStaticMarkup과 같음 Dom 을 안가져옴 ㅇㅇ *

// //*** render  ***
// import * as ReactDOM from 'react-dom'
// const  rootElement = document.getElementById('root')
// ReactDom.render(<APP/> , rootElement)
// //* render 함수는 컴포넌트 와 html 요소를 인수로 받는다 이 인수를 바탕으로 컴포넌트를 랜더링하며 *
// //* 이벤트 핸들러 또한 가능하다 . *

// //*** hydrate  ***
// import * as ReactDOM from 'react-dom'
// const  rootElement = document.getElementById('root')
// ReactDom.hydrate(<APP/> , rootElement)
// //* 일반적으로 render 와 hydrate 는 비슷한성질을 가지고있찌만 *
// //* hydrate 는 기본적으로 완료 된 html 요소가 있다는 가정하에 실행이 된다 . *
// //* ex) stream 이나 reactDom 이 없는 StatickNode 등은 안된다*
// //* 이 코드가 발생하는 원인은 서버에서 가져온 render 와 html 의 요소의 render 의 결과값이 다를때 발생한다. *
// //* 이에 나오는 비교는 서버와 클라이언트의 랜더링을 해야하기에 부담이 많이 갈 수 밖에 없다. *
// //* 대신 html 내부 요소의 시간을 측정할 땐 오류가 날 수 밖에없다 (1초 이하는 안남..) *
// //* 그럴땐 suppressHydrationWarning 을 사용하면 오류를 사라지게 할 수 있다. *
// //* 고로 render 처럼 빈 html 을 변환하진 않기에 hydrate의 사용률이 높다 *

