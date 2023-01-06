import { ArrayStateProps } from "../../ts/interface";
import { setArrayState, useRecoilState, setTextState } from "../../ts/recoil";

export const Button = () => {

    const [text, setText] = useRecoilState(setTextState);
    const [array, setArray] = useRecoilState(setArrayState);

    const onClick = () => {
        let num: number = 0;
        if (array.at(-1)?.id !== undefined) num = array.at(-1).id + 1

        setArray((array: ArrayStateProps[]) => [
            ...array,
            {
                id: num,
                text: text,
                isComplete: false
            }
        ]);
        setText("");
    }

    const onDelete = () => {
        setArray([]);
    }

    return (
        <>
            <button onClick={onClick}>저장하기</button>
            <button onClick={onDelete}>삭제하기</button>
        </>
    );
}