
import { Adding, Deleting } from './Action';

const intialdata = [ ]

const TodoReducer = (state = intialdata, action) => {


    if (action.type == Adding) {

        return [  ...state, action.payload   ]

    }


    
    if (action.type == Deleting) {

        return (state.filter((val) => val.id !== action.payload))

    }

    else {

        return state;

    }

}
export default TodoReducer;



