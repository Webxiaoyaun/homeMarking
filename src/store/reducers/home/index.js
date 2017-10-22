import * as types from '../../actionTypes';

let initState = {
    sliders: [],//首页轮播图
    lessons:[],//首页列表数据
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.GET_SLIDER:
            return {...state, sliders: action.sliders};
        case types.GET_LESSONS:
            return {...state, lessons: action.lessons};
        default:
            return state;
    }
}