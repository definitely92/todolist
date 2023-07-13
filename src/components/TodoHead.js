import React from "react";
import styled from "styled-components"
import { useTodoState } from "../TodoContext";
import TxtTaskGuide from "./TxtTaskGuide";
import { MdAddCircleOutline } from "react-icons/md";


const TodoHeadBlock = styled.div`
    padding-top : 48px;
    padding-left : 32px;
    padding-right: 32px;
    padding-bottom : 24px;
    border-bottom : 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
      }
      .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
      }
      .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
      }
`;

const TodoHead = () => {
    const todos = useTodoState();
    const notDone = todos.filter(todo => !todo.done).length;
    const todosLen = todos.length;

    const zeroTodo_msg = (
      <div>
        <span>하단의</span>
        <MdAddCircleOutline className='addIcon' />
        <span>하단의 버튼을 눌러 할일을 추가해보세요!</span>
      </div>
    ),
    message = () => {
      if(notDone <= 0) {
        if(todosLen > 0) return '모든 할일을 마치셨어요!';
        else return zeroTodo_msg;
      } else return notDone + '개의 할일이 남았어요!'
    }
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR',{weekday : 'long'})
    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <TxtTaskGuide message={message()} />
        </TodoHeadBlock>
    )
}

export default TodoHead;