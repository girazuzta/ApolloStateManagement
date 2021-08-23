import { InMemoryCache } from '@apollo/client';
import { makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: { 
            fields: {
                field1: { 
                    read() {
                        return Var1();
                    }
                }
            }
        }
    }
});

const init1 = [
    {
        id: 0,
        text1: "Item1",
        number2: 100,
        text3: "Text",
        text4: "Text",
        text5: "Text",
        number6: 100,
        number7: 100, 
    },
    {
        id: 1,
        text1: "Item2",
        number2: 100,
        text3: "Text",
        text4: "Text",
        text5: "Text",
        number6: 100,
        number7: 100, 
    },
    {
        id: 2,
        text1: "Item3",
        number2: 100,
        text3: "Text",
        text4: "Text",
        text5: "Text",
        number6: 100,
        number7: 100, 
    },
    {
        id: 3,
        text1: "Item4",
        number2: 100,
        text3: "Text",
        text4: "Text",
        text5: "Text",
        number6: 100,
        number7: 100, 
    },
];

export const Var1 = makeVar(init1);