import axios from 'axios';

const data_action = ()=>{
    return async (dispatch, getState)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        dispatch({
            type:'GET_DATA',
            payload: response.data
        })
    }
}

export default data_action