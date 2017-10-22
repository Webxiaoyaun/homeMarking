import {get} from './index';
//用来获取列表
export function getLists(type,limit){
    return get(`/list?types=${type}&limit=${limit}`);
}
