//*** 훅의 규칙 ***

//* 1. 최상위에서만 훅을 호출해야 한다 반복문 or 조건문 중첩된 함수 내에서 훅을 실행 시킬 수 없다 *
//* 2. 일반 js 에선 사용 할 수 없다. *

//* 1. 규칙에 대해 알아보자 *
//* 훅에 대한 정보 저장은 리액트 어딘가에 있는 index와 같은 key 를 기반으로 구현돼 있다 그렇기에 hook 들은 전부 순서에 아주 큰 영향을 받는다. *
//* p.237 *
//* 리액트 훅은 호출 순서에 따라 저장된다 그 이유는 객체 내에서 순서에 의존해 state 나 effct 의 결과에 대한 값을 저장하고 있기 때문이다. *