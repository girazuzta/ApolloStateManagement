import { Var1 } from "../cache"

export const onChange = (id, e) => {
    let number2 = 200;
    let number6 = 300;
    let changedArray = Var1()
        .map( (item) => item.id === id ? {...item, number2, number6 } : item );
    console.log(changedArray)
    Var1(changedArray);
}