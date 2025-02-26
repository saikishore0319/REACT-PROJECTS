import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo,startEditing } from "./features/todo/todoSlice";
import AddTodo from "./AddTodo";


function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
       <div>
        <AddTodo/>
        {todos.map((todo)=>(
             <div key={todo.id} className="  flex justify-center items-center p-3 ">
             <ul className=" bg-white md:w-216 w-150 h-30 rounded-lg flex flex-wrap">
                 <div className="text-center flex justify-evenly w-full h-full text-4xl items-center  ">
                     <div className="w-full ">
                        {todo.text} 
                     </div>
 
                     <div className="   w-20 h-10 mr-3 rounded-4xl  shadow-2xl ">
                         <button className=" flex  bg-red-400  hover:cursor-pointer justify-center items-center w-20 rounded-4xl text-black h-10  text-center hover:bg-red-500 hover:text-white "
                            onClick={()=>(dispatch(removeTodo(todo.id)))}
                         >
                             <svg
                                 
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="w-6 h-6"
                             >
                                 <path
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                 />
                             </svg>
                         </button>
                     </div>
                     <div className="   w-20 h-10 mr-3 rounded-4xl  shadow-2xl ">
                         <button className=" text-lg flex  bg-blue-400  hover:cursor-pointer justify-center items-center w-20 rounded-4xl text-black h-10  text-center hover:bg-blue-500 hover:text-white "
                            onClick={()=>(dispatch(startEditing(todo.id)))}
                         >
                             edit
                         </button>
                     </div>
                 </div>
             </ul>
         </div>
        ))}
       </div>

        
    )
}

export default Todo