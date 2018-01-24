import { combineReducers } from 'redux'
import machineReducer from '../components/machine/equipmentReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    machine: machineReducer,
    toastr: toastrReducer,
    form: formReducer
})

export default rootReducer