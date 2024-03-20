//* npm install swiper *
// swiper의 본격적인 사용전 npm 으로 다운을 받아야한다.

//*** swiper ***
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination, Mousewheel, EffectCards } from "swiper/modules";
//* 필요한 swiper css 를 import 해야 쓸 수 있다 *

// <Swiper
// modules={[Navigation, EffectCards, Pagination, Autoplay, Mousewheel]}
// effect="cards"
// className="w-full h-full"
// onSwiper={(swiper) => {
//   // Swiper 컴포넌트에 대한 초기화나 설정을 수행할 수 있습니다.
// }}
// mousewheel={{
//   invert: false,
//   // passive: true 옵션을 추가하여 스크롤에 영향을 주지 않도록 설정합니다.
//   // 'mousewheel' 이벤트 리스너를 'passive'로 설정하여 경고를 해결합니다.
// }}
// >
// {searchResults.map((result, index) => (
//   <SwiperSlide key={index} className=" flex flex-row justify-between mx-auto">
//     <Test1 Books={result ? result : []} />
//     <SlideInfo Books={result ? result : []} />
//   </SwiperSlide>
// ))}
// </Swiper>