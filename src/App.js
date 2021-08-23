import { useQuery } from "@apollo/client";
import { ITEMS } from "./operations/queries";
import styled from '@emotion/styled';
import QueryResult from './components/QueryResult';
import Item from "./components/item";

const App = () => {
    
    const {loading, error, data} = useQuery(ITEMS);

    return (
        <Tarjeta>
            <Encabezado className={"ms-Fabric"}>
                <RótulosTabla>
                    <ItemRótulosBorde style= {{borderLeft: '0px'}}>id</ItemRótulosBorde>
                    <ItemRótulosBorde>Text1</ItemRótulosBorde>
                    <ItemRótulosBorde>Number1</ItemRótulosBorde>
                    <ItemRótulosBorde>T</ItemRótulosBorde>
                    <ItemRótulosBorde>Text4</ItemRótulosBorde>
                    <ItemRótulosBorde>Text5</ItemRótulosBorde>
                    <ItemRótulosBorde>Number6</ItemRótulosBorde>
                    <ItemRótulosBorde>Number7</ItemRótulosBorde>
                    <ItemRótulosBorde> </ItemRótulosBorde>
                </RótulosTabla>
            </Encabezado>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.field1?.map( (item, index) => 
                    <Item key={index} index ={index} item={item} />
                )}
            </QueryResult>
        </Tarjeta>
    );
};

export default App;

const Tarjeta = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '0.5em',
    padding: '0 0 0.5em 0',
    width: '700px',
    backgroundColor: 'white',
    boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.25)',
    borderRadius: '10px',
});
const Encabezado = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyItems: 'center',
    margin: '0 0 0.3em 0', 
    padding: '0em',
    height: '',
    width: '',
    backgroundColor: 'white',
    boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.25)',
    borderRadius: '10px 10px 0 0',
});
const RótulosTabla = styled.div({
    display: 'Grid',
    gridTemplateColumns: '25px 175px 65px 35px 100px 75px 75px 75px 75px',
    gridTemplateRows: '1fr',
    gridColumnGap: '0px',
    gridRowGap: '0px',
    paddingLeft: '0px',
    fontSize: '0.9em',
    width: '100%',
    borderBottom: 'solid 1px #CCCCCC',
});
const ItemRótulosBorde = styled.div({
    borderLeft: 'solid 1px #CCCCCC',
    padding: '0px 5px' 
});
