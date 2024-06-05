import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../action";
import { useDispatch, useSelector } from "react-redux";

function Todo() {
  const [inputdata, setInputdata] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.Todoreducer.list);
  return (
    <div>
          <div className="app">
        <h1 className="title">Todo List</h1>
        </div>
      
      <div className="inputcon">
     
          <input
            type="text"
            placeholder=" Enter something"
            value={inputdata}
            onChange={(e) => {
              setInputdata(e.target.value);
            }}
          />
          <button
          className="addbtn"
            onClick={() => {
              dispatch(addTodo(inputdata), setInputdata(""));
              
            }}
            disabled={inputdata ==""}
          >
            Add
          </button>
        
      </div>

      <div className="todolist">
        {list.map((elem) => {
          return (
            <div className="todo" key={elem.id}>
              <h3>{elem.data}</h3>
              <button
              className="deletebtn"
                onClick={() => {
                  dispatch(deleteTodo(elem.id));
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>

      <div className="remove">
        { list.length >=1 && (
           <button
           className="removeBtn"
           onClick={() => {
             dispatch(removeTodo());
           }}
         >
           CLEAR ALL
         </button>
        )}
       
      </div>
    </div>
  );
}

export default Todo;
