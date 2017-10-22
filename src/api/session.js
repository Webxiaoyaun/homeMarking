import {post} from './index';
//注册
export function register(user) {
    return post('/register',user);
}
//登录
export function login(user) {
    return post('/login',user);
}
