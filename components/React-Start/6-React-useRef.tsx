//*** useRef ***
//* useRef 는 useState 와 동일하게 컴포넌트 내부에서 랜더링이 일어나도 변경 가능한 상태값을 저장한다. *
//* 그러나 큰 차이점 두개가 있다. *
//* 1. useRef는 반환값인 객체 내부에 있는 current 값에 접근 또는 변경할 수 있다. *
//* 2. useRef는 값이 변하더라도 랜더링을 발생시키지 않는다 . *
//* 단순하게 말하면 변동성 없이 기본값 지키는 === useRef *

//* p.216 *
//* 그렇다면 외부에서 변수를 선언 하는것이 낫지 않는가 ? *
//* : 의 방식의 단점은 *
//* 1. 컴포넌트의 랜더링 전에 value 라는 값이 기본적으로 존재하게 되어 메모리에 불필요한 값을 갖게 하는 악영향을 미친다. *
//* 2. 컴포넌트가 여러번 재생성이 되었을때 초기화 값이 없다. *

//* useRef는 다르다 *
//* 컴포넌트가 랜더링 될 때만 생성되며 *
//* 컴포넌트 인스턴스가 여러 개라 도 각각 별개의 값을 바라본다. *

//* useRef의 대표적인 예시는 DOM에 접근하고 싶을 때 일것이다. *

//* p.217 *

//*  *