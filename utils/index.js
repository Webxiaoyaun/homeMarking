
const get= function(url){
  return  fetch(`http://localhost:3000${url}`,{
      headers: {
          "Accept": "application/json",
          "Content-Type":"application/json"
      },
      method:'get',
  }).then(res => res.json())
      .catch(err=>{
          console.log(err)
      })
};

const post= function(url,body){
    return   fetch(`http://localhost:3000${url}`,{
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json"
        },
        method:'post',
        body:JSON.stringify(body)
    }).then(res => res.json())
        .catch(err=>{
            console.log(err)
        })
};

export const getCode=(function () {
    var str='abcdefghijklmnopqsuvwxzytrABCDEFGHIJKLMNOPQSUVWXZYTR0123456789';

//数组去重
    var ary=[];
    function checkAry(ary){
        var obj={};
        for(var i=0;i<ary.length;i++) {
            var item = ary[i];
            if(obj[item]==item){
                item=ary[ary.length-1];
                ary.length--;
                i--;
            }
            obj[item]=item;
        }
        return ary;
    }
//    console.log(ary);
//获取四个不同的随机字母
    function getFour(){
        if(ary.length>=4){
//            return ary;
            ary.splice(0);//将数组清空，在每次循环后给其新的值
        }

        var num= Math.round(Math.random()*61);
        ary.push(num);
        var newAry=checkAry(ary);
        if(newAry.length<4){
            return getFour();
        }else{
            return newAry;
        }
    }
//将获取的四个数组成的数组，变成字符串返回
    return  function getCode(){
        var ary=getFour();
        var list='';
        for(var i=0;i<ary.length;i++){
            list+=str[ary[i]];//找到索引对应的字符串，将其进行拼接
        }
        return list;
    }
})();

export {
    get,
    post
}