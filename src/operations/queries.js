import { gql } from "@apollo/client";

export const ITEMS = gql`
    query getItems {
        field1 @local {
            id
            text1
            number2
            text3
            text4
            text5
            number6
            number7
        }
    }
`;