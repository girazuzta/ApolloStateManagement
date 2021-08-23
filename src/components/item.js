import styled from '@emotion/styled';
import { IconButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { AddItem } from '../operations/addItem';
import { DeleteItem } from '../operations/deleteItem';
import { onChange } from '../operations/onChange';


const Item = ({ item, index }) => {
    // PROPS: 
    let {
        id,
        text1,
        number2,
        text3,
        text4,
        text5,
        number6,
        number7,
    } = item;

    return (
        <Grid>
            <TextField borderless readOnly defaultValue={id} type="number"/>
            <TextField borderless readOnly defaultValue={text1} />
            <TextField borderless defaultValue={number2} onChange={()=>{onChange(id)}}/>
            <TextField borderless readOnly defaultValue={text3} />
            <TextField borderless readOnly defaultValue={text4} />
            <TextField borderless readOnly defaultValue={text5} />
            <TextField borderless readOnly defaultValue={number6} />
            <TextField borderless readOnly value={number7} />
            <div>
                <IconButton iconProps={{iconName: 'Add'}} onClick={ () => {AddItem(index)}}
                style={{width: 30, height: '1.5em', padding: 0}} iconStyle={{fontSize:40}} />
                <IconButton iconProps={{iconName: 'Delete'}} onClick={ () => {DeleteItem(index)}}
                style={{width: 30, height: '1.5em', padding: 0}} iconStyle={{fontSize:40}}/>
            </div>
        </Grid>
    );
};

export default Item

const Grid = styled.div ({
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