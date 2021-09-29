import React, { useState, useEffect } from 'react';
import {Container, Title, List, ListItem, ListItemP, Button, Area, Icon, SelectButton, Circle} from './styles/index';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import deleteIcon from './assets/img/delete.png';

import SearchBox from './components/SearchBox';

function App(){

  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const [clear, setClear] = useState(false);
  const [date, setDate] = useState([new Date()]);
  const [isSelect, setIsSelect] = useState(false);
  const [listDate, setListDate] = useState([]);
  
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

      let x = new Date(date).setHours(0, 0, 0, 0);
      let newList = [...list, {title: newItem, date: x, done: false}];

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

    // console.log(event);

    let x = new Date().setHours(0, 0, 0, 0);

    setDate([new Date(event)]);

    if(isSelect){

      setDate([new Date(x), event].sort((a,b)=>a.getTime()-b.getTime()));

    }
    
  }

  function searchTask(dat){

    let x = false;
      
    list.map((item, index) => {

      // console.log(new Date(new Date(item.date).setHours(0, 0, 0, 0)));
      // console.log(dat);

      if(new Date(new Date(item.date).setHours(0, 0, 0, 0)).getTime() == dat.getTime()){ 
        
        if(!item.done){
          x = true;
        }

      }

    });

    return x;

  }
  
  return(

    <Container>

      <Title>Lista de Tarefas</Title>

      <Calendar onChange={changeDate} value={date} tileContent={({ activeStartDate, date, view }) => view === 'month' && searchTask(date) ? <Circle /> : null} />
      <SelectButton onClick={() => setIsSelect(!isSelect)} textColor={isSelect?"#eee":"#000"} color={isSelect?"#1D3854":"#70B8FF"}>{isSelect?"Selecionar apenas uma data":"Selecionar várias datas"}</SelectButton>

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

          let day = new Date(new Date(item.date).setHours(0, 0, 0, 0));

          let day2;

          if(date.length == 1){
            day2 = new Date(new Date(date[0]).setHours(0, 0, 0, 0));
          }
          else{
            day2 = new Date(new Date().setHours(0, 0, 0, 0));
          }

          let showSelect;

          day = day.getDate() + "" + day.getMonth() + "" + day.getFullYear();

          day2 = day2.getDate() + "" + day2.getMonth() + "" + day2.getFullYear();

          if((new Date(item.date).getTime() >= new Date(date[0]).getTime() && new Date(item.date).getTime() <= new Date(date[1]).getTime())){

            showSelect = true;

          }

          if(day == day2 || (showSelect)){

            let dat = new Date(item.date);
            dat = dat.getDate() + '/' + (dat.getMonth()+1) + '/' + dat.getFullYear();            

            return (

              <ListItem color={item.done?"#1EFA46":"#FAEB07"} colorHover={item.done?"#16BA34":"#DED007"} key={index}>
  
                <ListItemP onClick={() => handleToggleDone(index)}>
                  {item.done &&
                    <del>{item.title}</del>
                  }              
  
                  {!item.done &&
                    item.title
                  }

                  <br/><br/>

                  {dat}
                </ListItemP>
  
                <Icon color={item.done?"#0D6E1F":"#F57100"} src={deleteIcon} onClick={() => {deleteItem(index)}} />
  
              </ListItem>
  
            );
          }

        })}

      </List>

    </Container>

  );

}

export default App;