const json_data_reducer = (state=[], action)=>{
    if(action.type == 'GET_DATA'){
        state=action.payload
        return state
    }
    return state
}

export default json_data_reducer