import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    outline: none;

    @media(max-width: 600px) {
        flex: 1;
    }

    @media(min-width: 601px) {
        width: 300px;
        margin-right: 5px;
        margin-left: 5px;
    }
    
`;

function SearchBox(props){

    const [text, setText] = useState('');

    useEffect(() => {
        
        if(props.clear){
            setText('');
            props.changeClear(false);
        }

    }, [props.clear]);

    function handleKeyUp(event){
        
        if(event.keyCode == 13 && text.length > 0){

            if(props.onEnter){

                props.onEnter(text);                
                setText('');

            }

        }
    }

    return(

        <InputText
            type="text"
            placeholder={props.placeholder ?? "Digite alguma coisa..."}
            value={text}
            onChange={(e)=>{setText(e.target.value);props.setValue(e.target.value)}}
            onKeyUp={handleKeyUp}
        />        

    );

}

export default SearchBox;