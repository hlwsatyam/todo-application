import './todoApp.css'
import React from 'react'
import { useState } from 'react'
import { AddingAction, DeletingAction } from './ToDo-React-React/Action'

import { useDispatch, useSelector } from 'react-redux'

const ToDo = () => {


    const todos = useSelector((sta) => sta);



    const dispatch = useDispatch();

    let [livetask, changeliveTask] = useState('')

    let btnclick = () => {
        if (livetask.trim() != '') {

            dispatch(AddingAction(livetask));
            changeliveTask(' ');

        }
    }

console.log(  Math.random()  )



    let deletebtn = (id) => {
        dispatch(DeletingAction(id));
    }

    return (

        <div className='container-fluid '  >
            <div className='header p-5   ' > <p className='text-center  header  '>T❤-DO-NOW</p></div>
            <div className='text-center  search m-5 '  >
                <input placeholder=' type...'
                    value={livetask}
                    onChange={(e) => changeliveTask(e.target.value)}
                /><button onClick={() => btnclick()}  >Add Task</button>
            </div>



            <ul>

                {
                    todos.map(

                        val =>
                            <li> <div className='  show m-2 text-center '  >
                                <p style={{ paddingTop: "15px" }}  > {val.name} | {val.time}  
                                  </p><button onClick={() => deletebtn((val.id))}     > REMOVE &#xe872;</button>
                            </div></li>
                            
                    )
                }
            </ul>
        </div >
    )
}
export default ToDo;