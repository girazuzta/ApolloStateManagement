import { Var1 } from "../cache";

export const DeleteItem = (index) => {

    const DeleteI = (array) => array.reduce(
        (newArray, member, i) =>
            i === index
            ? newArray 
            : newArray.concat(member) ,
        []
    );

    const result = DeleteI( Var1())
    Var1(result)
}