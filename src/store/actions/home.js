import {get} from '../../../utils/index.js'

export default {
    //thunk中间件会将这个fetchSliders函数执行，并且让返回的那个函数 赋值给 fetchSliders
    fetchSliders:function () {
        return (dispatch,getState)=>{
            get('/sliders').then(sliders=>{
                dispatch({
                    type:'GET_SLIDER',
                    sliders
                })
            })
        }
    },
    fetchLessons:function () {
        return (dispatch,getState)=>{
            get('/lessons').then(lessons=>{
                dispatch({
                    type:'GET_LESSONS',
                    lessons                })
            })
        }
    }
}


