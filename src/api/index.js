const HOST='http://localhost:3000';

//向后台发送post请求，返回promise对象
export const get = (url) => {
    return fetch(`${HOST}${url}`, {
        method: 'get',
        //默认跨域时为了安全，不携带cookie,加上此选项可以带上cookie
        credentials: 'include',
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json());
};
export const post=(url,body)=> {
    return fetch(`${HOST}${url}`,{
        method:'post',
        credentials:true,
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(body)
    }).then(res=>res.json()).catch(err=>{
        console.log(err);
    });
};
