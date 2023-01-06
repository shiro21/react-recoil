import React from "react";
import { useRecoilState, setTextState } from "../../ts/recoil";

export const TextInput = () => {

    const [text, setText] = useRecoilState(setTextState);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setText(value);
    };

    return (
        <>
            <input type="text" value={text} onChange={onChange}  />
        </>
    );
};