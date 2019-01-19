import service from '../../../util/service'

const FETCH_DATA = "FETCH_DATA"
const LOADER = "LOADER"

export function fetchData() {
    return (dispatch) => {
        dispatch({
            type: LOADER,
            payload: true
        })
        service.get('http://www.omdbapi.com/?i=tt3896198&apikey=cb08a0a1', (data)=>{
           dispatch({
               type: FETCH_DATA,
               payload: data 
           })
           dispatch({
                type: LOADER,
                payload: false
            }) 
        })
    }
}




const initialState = {
    movie: {},
    loader: false
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                movie: action.payload
            }

        case LOADER:
            return {
                ...state,
                loader: action.payload
            }

        default: 
            return state
    }
}