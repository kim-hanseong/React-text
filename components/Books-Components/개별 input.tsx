//***  ***
// 수량을 관리할 상태
// const [quantities, setQuantities] = useState<any>({});

// 렌더링될 때마다 이전 상태를 보존하려면 useEffect를 사용할 수 있습니다.

// const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
// 입력 값이 1 미만일 때는 1로 설정합니다.
//     const newValue = Math.max(1, parseInt(e.target.value) || 1);
//     const updatedQuantities = { ...quantities, [itemId]: newValue };
//     setQuantities(updatedQuantities);
// };

// useEffect(() => {
//     console.log(quantities);
// }, [quantities]);

// <Input type="number" label="수량" defaultValue="1" onChange={(e) => onQuantityChange(e, item.id)} value={quantities[item.id] || ''} />
//*** user id 를 기반으로 개별 map 마다 input 을 컨트롤 하게 만듦. ***
//***  ***