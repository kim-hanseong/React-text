//*** useImperativeHandle ***
//* 이 훅은 개발과정에서 자주 볼 수 없는 훅으로 많이 사용되진 않는다 그래도 일부 사례를 들 수 있다. *
//* ref 는 useRef 의 반환한 객체로 HTML Element에 접근하는 용도로 흔히 사용된다 *
//* ref 도 컴포넌트의 props 처럼 사용할 수 있는 예약어로 별도로 선언돼 있지 않아도 사용할 수 있다 *

//* useImperativeHandle는 부모 컴포넌트에서 노출되는 값을 원하는 대로 바꿀 수 있다 *
//* useImperativeHandle는 ref 의 추가 부분에서 action을 줄 수 있다. *