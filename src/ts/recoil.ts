import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// setTextState || TextState
export const setTextState = atom({
    key: "setTextState",
    default: ""
});
export const TextState = selector({
    key: "TextState",
    get: ({ get }) => {
        const recoilText = get(setTextState);

        return recoilText;
    }
});

// setArrayState || ArrayState
export const setArrayState = atom({
    key: "setArrayState",
    default: [],
    effects_UNSTABLE: [persistAtom]
});
export const ArrayState = selector({
    key: "ArrayState",
    get: ({ get }) => {
        const recoilArray = get(setArrayState);

        return recoilArray;
    }
})

export { RecoilRoot, atom, selector, useRecoilState, useRecoilValue };