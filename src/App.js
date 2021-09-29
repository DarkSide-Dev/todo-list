import React, { useState, useEffect } from 'react';
import {Container, Title, List, ListItem, ListItemP, Button, Area, Icon} from './styles/index';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import deleteIcon from './assets/img/delete.png';

import SearchBox from './components/SearchBox';

function App(){

  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const [clear, setClear] = useState(false);
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {

    if(localStorage.getItem('list')){
      setList(JSON.parse(localStorage.getItem('list')));
    }

  }, []);

  function setItem(item){
    setText(item);
  }
  
  function addItem(newItem){

    if(newItem.length > 0){
      let newList = [...list, {title: newItem, date: date, done: false}];

      localStorage.setItem('list', JSON.stringify(newList));

      setList(newList);

      setClear(true);

      setText('');
    }

  }

  function handleToggleDone(index){

    if(list.length > 0 && list[index]){
      let newList = [...list];
      newList[index].done = !newList[index].done

      localStorage.setItem('list', JSON.stringify(newList));

      setList(newList);
    }

  }

  function deleteItem(index){

    list.splice(index,1);
    
    localStorage.setItem('list', JSON.stringify(list));

    let ex = JSON.parse(localStorage.getItem('list'))

    setList(ex);

  }  

  function changeDate(event){

    setDate(event);
    
  }

  // localStorage.clear();
  
  return(

    <Container>

      <Title>Lista de Tarefas</Title>

      <Calendar onChange={changeDate} value={date} />

      <Area>
      
        <SearchBox
          placeholder="Adicione um item..."
          onEnter={addItem}
          setValue={setItem}
          clear={clear}
          changeClear={e=>setClear(e)}
        />

        <Button onClick={() => {addItem(text)}}>Adicionar</Button>

      </Area>

      <br/>

      <List>

        {list.map((item, index) => {

          let day = new Date(item.date);

          let day2 = new Date(date);

          day = day.getDate() + "" + day.getMonth() + "" + day.getFullYear();

          day2 = day2.getDate() + "" + day2.getMonth() + "" + day2.getFullYear();

          if(day == day2){
            return (

              <ListItem color={item.done?"#15AD31":"#FAEB07"} colorHover={item.done?"#157B31":"#DED007"} key={index}>
  
                <ListItemP onClick={() => handleToggleDone(index)}>
                  {item.done &&
                    <del>{item.title}</del>
                  }              
  
                  {!item.done &&
                    item.title
                  }
                </ListItemP>
  
                <Icon src={deleteIcon} onClick={() => {deleteItem(index)}} />
  
              </ListItem>
  
            );
          }

        })}

      </List>

    </Container>

  );

}

export default App;