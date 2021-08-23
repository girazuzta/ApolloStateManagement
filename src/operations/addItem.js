import { Var1 } from "../cache";

export const AddItem = (index, id) => {

    const newItem = () => {
        return (
            {
                id: 100,
                text1: "NewItem",
                number2: 100,
                text3: "Text",
                text4: "Text",
                text5: "Text",
                number6: 100,
                number7: 100,
            }
        )
    };

    const insertBetween = (insertion, array) =>
        array.reduce(
            (newArray, member, i, array) =>
                i === index
                ? newArray.concat(member, insertion)
                : newArray.concat(member),
            []
        );

    const insertLast = (insertion, array) =>
        array.concat(insertion);

    const conditional = (index, insertion, array) =>
        index=== 0 
        ? insertLast(insertion, array)
        : insertBetween(insertion, array);

    const result = conditional(index, newItem(), Var1());
    
    // click AddItem icon at second row, expected value: ...item, text1: "NewItem"
    console.log(result)
    // Console: checked,  Ractive var: problem. It renders Item4 instead of New Item. 
    
    Var1(result);
}