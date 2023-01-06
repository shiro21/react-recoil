import { ArrayStateProps } from "../../ts/interface";
import { setArrayState, useRecoilState } from "../../ts/recoil";

export const ClearButton = ({ clear }: {clear: number}) => {

    const [array, setArray] = useRecoilState(setArrayState);
    
    const onClear = async () => {
        const newArray = await array.filter((arr: ArrayStateProps) => arr.id !== clear);

        setArray(newArray);
    }

    return (
        <>
            <button onClick={onClear}>삭제하기</button>
        </>
    );
}