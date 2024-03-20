//*** 순차 정렬 하는방법 ***
//* 정렬중 방법이 있겠지만 오늘은 받아온 api 내부 내용을 기준으로 정렬을 해보려 한다. *

// const [data, setData] = useState<ApiBookData[]>([]);
// useEffect(() => {
//     ReadSupaBase().then(({ data: record, error }) => {
//         if (error) {
//             console.error("Error fetching data:", error);
//         } else {
//             setData(record as ApiBookData[]);
//         }
//     });
// }, [data]);
// const sortedData: ApiBookData[] = data.sort((a, b) => b.id - a.id);
//* 이렇게 supabase 를 data 안에 내포시키고 의존성 배열로 data 의 변경점이 일어나면 *
//* 이 컴포넌트 자체만 리랜더링 되게 만들었으며 *
//* 받아온 데이터의 id 즉 supabse 의 테이블 생성 id 가 클수록(늦게 들어 올 수록) 위에 배치되게 만들었다. *
// 음수를 반환하면 a를 b보다 작은 값으로 간주하여 정렬됩니다.
// 양수를 반환하면 a를 b보다 큰 값으로 간주하여 정렬됩니다.
// 0을 반환하면 a와 b가 동등한 값으로 간주하여 변경하지 않습니다.

//* 이런식으로 price, id 등등 비교가 가능한 number type 이면 가능하게 만들었다. *

const [sortTest, setSortTest] = useState<ApiBookData[]>([]);
const sortedData = data.slice().sort((a, b) => b.id - a.id);
const sortedData2 = data.slice().sort((a, b) => parseInt(b.sale_price) - parseInt(a.sale_price));
const totalSalePrice = data.map(item => item.sale_price); // sortedData를 사용하여 매핑
const totalPrice = totalSalePrice.reduce((acc, curr) => acc + parseInt(curr), 0);
useEffect(() => {
    setSortTest(sortedData);
}, [data]);
// 찜 목록 NULL
const Errorpage = () => {
    return (
        <div className="w-full  flex flex-col justify-start items-center gap-4 mx-auto my-32">
            <Image className="border-1" src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/ico_nodata@2x.png" alt="주의 아이콘"></Image>
            <p>찜 목록이 없습니다.</p>
        </div>
    )
}
//*** logincheck ***
const LoginCheck = () => {
    checkLogin()
    onOpen()
}

return (
    <>
        <Badge content={data.length} shape="circle" color="danger" >
            <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
                onPress={() => { LoginCheck() }}
            >
                <Image src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-recent.svg" alt="최근 본 목록" ></Image>
            </Button>
        </Badge>
        <Modal className="h-[400px] md:h-[700px] overflow-auto md:absolute right-0 top-0" placement={"bottom-center"} isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">장바구니</ModalHeader>
                        <ModalBody className=" relative">
                            <div className="flex flex-col gap-3">
                                <Table
                                    aria-label="Rows actions table example with dynamic content"
                                >
                                    <TableHeader>
                                        <TableColumn onClick={() => { setSortTest(sortedData) }} className=" flex items-center gap-2">최신순</TableColumn>
                                        <TableColumn>제목/작가</TableColumn>
                                        <TableColumn onClick={() => { setSortTest(sortedData2) }} className=" flex items-center gap-2">가격</TableColumn>
                                        <TableColumn>수량</TableColumn>
                                        <TableColumn>utill</TableColumn>
                                    </TableHeader>