import style from "../../styles/main.module.scss";
import { ArrayStateProps } from "../../ts/interface";
import { TextState, useRecoilValue, ArrayState } from "../../ts/recoil";
import { Button } from "../item/Button";
import { ClearButton } from "../item/ClearButton";
import { TextInput } from "../item/TextInput";

export const MainContents = () => {
    const text = useRecoilValue(TextState);
    const array = useRecoilValue(ArrayState);

    return (
        <section className={style.main_contents_wrap}>
            <div>
                <TextInput />
                <Button />
            </div>
            <div>
                Input 내용: {text}
            </div>
            <div className={style.array_wrap}>
                {
                    array.map((item: ArrayStateProps, index: number) => (
                        <div key={index}><span>{item.id}:</span> {item.text} <ClearButton clear={item.id} /></div>
                    ))
                }
            </div>
        </section>
    );
};