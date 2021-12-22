import React, { useState } from 'react';
import { AddItem } from './components/addItem';
import { AddTodo } from './components/addTodo';
import { Footer } from '../../components/footer';
import './style.css'
let nextId = 0;
export const Focus = () => {
    // const [inputValue, setInputValue] = useState('test');
    // const [todoList, setTodoList] = useState([{
    //     value: "xiaoliu",
    //     id: 0
    // }, {
    //     value: "rao",
    //     id: 0
    // }])
    const [isAdd, setIsAdd] = useState(false)
    // const handleSubmit = (value) => {
    //     // alert(value)
    //     setInputValue(value)
    //     setIsAdd(!isAdd)
    //     setTodoList([...todoList, { value: inputValue, id: nextId }])
    // }


    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([
        {
            id: 0,
            content: '写高数作业',
            done: false
        }
    ])
    const handleChange = (e) => {
        console.log(e)
        setInputValue(e.target.value)
        console.log(inputValue)
    }
    // if (inputValue !== '') {
    //     ifInvolve = false;
    // }
    const hanldeClick = () => {
        // setInputValue('')
        setIsAdd(!isAdd)
        setTodoList(
            [...todoList,
            {
                id: nextId++,
                content: inputValue,
                done: false
            }]
        )
        console.log("id:", nextId)
    }
    const Home = () => {
        return (<div className='focusContainer'>
            <div className="todoTitle">
                <div className='titleContent'>
                    <span>专注事项</span>
                    <i className='addIcon' onClick={() => setIsAdd(!isAdd)}></i>
                </div>
            </div>
            <main>
                <div className='todoItems'>
                    {todoList.map(todoItem => <AddItem key={todoItem.id} content={todoItem.content} />)}
                </div>
            </main>
            <Footer />
        </div>)
    }
    return (
        <div>
            {isAdd ? <AddTodo hanldeClick={hanldeClick} handleChange={handleChange} value={inputValue} /> : <Home />}
        </div>
    )
}
