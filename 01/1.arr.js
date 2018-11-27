/* JS数据类型
*基本 number string boolean undefined null
*Object function...
*/

// 操作数组的方法 ES4
// 数组的变异(能改变原数组)
// (pop push unshift shift  splice reverse sort)

// indexOf lastIndexOf concat slice

//ES5
// forEach  filter(过滤) map(映射)  some every  reduce

//find  includes

//面试：for,forEach,for in,for的区别

let arr = [1,2,3,4,5]
arr.b = 100; //给数组添加私有属性
console.log("ok");
/* 编程式 */
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

/* 声明式 不关心内部怎么实现 */
//forEach 不支持return
arr.forEach(function(item,index,){
    console.log(item);
})

/* for in 遍历的key是字符串,可以遍历自定义的私有属性 */
for(let key in arr){
    console.log(typeof key)  //string
}

for(let val of arr){ //支持return 并且of是数组(不能遍历对象)
    console.log(val)
}

let obj = {school:"zfpx",age:10}

for(let val of Object.keys(obj)){  //Object.keys 将对象的key作为新的数组,这样可以遍历对象
    console.log(obj[val])
}

// 2）filter 是否操作原数组：不    返回结果:过滤后的新数组     回调函数的返回结果：如果返回true表示这一项放到新数组中，false则不放

let newarr = [1,2,3,4,5].filter(function(item){
    return item>2 && item<5;
})
console.log(newarr); //[ 3, 4 ]

//小面试 1===1===1  1===1 true  true===1为false

//3）map映射 将原有的数组映射成新的数组  [1,2,3] <li>1</li><li>2</li><li>3</li>
// 不操作原数组  返回新数组  回调函数返回什么这一项就是什么
let arr1 = [1,2,3].map(function(item){
    return `<li>${item}</li>`  //[ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
})
console.log(arr1.join(""));  //<li>1</li><li>2</li><li>3</li>

//4) includes 返回的是boolean
let arr2 = [1,2,55].includes(5);
console.log(arr2);  //false

//5)find 返回找到的那一项，不会改变数组,回调函数中返回true表示找到了，找到后停止循环，找不到返回undefined
let arr3 = [1,2,3,55].find(function(item){ //找具体的某一项用find
    return item.toString().indexOf(5)>-1;
})
console.log(arr3)  //55

//6)some 找true 找到true后停止 返回true,找不到返回false
let arr4 = [1,2,3,55].some(function(item){
    return item.toString().indexOf(5)>-1;
})
console.log(arr4)  //true

//7）every 找false 找到false后停止 返回false

let arr5 = [1,2,3,55].every(function(item){
    return item.toString().indexOf(5)>-1;
})
console.log(arr4)  //false

//8) reduce（收敛） 4个参数 返回的是叠加后的结果 回调函数返回的结果  原数组不变
//prev代表的是数组的第一项，next是数组的第二项
//第二次 prve为undefined   next是数组的第三项
let sum = [1,2,3,4,5].reduce(function(prev,next,index,item){
    console.log(prev,next,index);
    return prev+next;//本次的返回值 会作为下一次的prev
})
console.log(sum); //15


let sum2 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    return prev.price*prev.count + next.price*next.count  //返回的是数字，会作为下一次的prev 数不能.price
})
console.log("sum2",sum2); //NaN

//开头添加个0 缺点是多循环一次
let sum3 = [0,{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    //第0次   0 + 60
    //第一次  60 + 90...
    return prev + next.price*next.count  //返回的是数字，会作为下一次的prev 数不能.price
})
console.log("sum3",sum3); //270

let sum4 = [{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    //第0次   0 + 60
    //第一次  60 + 90...
    return prev + next.price*next.count  //返回的是数字，会作为下一次的prev 数不能.price
},0)  // 第二个参数0 会作为默认的第一次prev
console.log("sum4",sum4); //270


//数组扁平化
console.log([[1, 2, 3], 4, 5, [6, [7, 8]]].join(","));  //1,2,3,4,5,6,7,8 是字符串
let arr7 = [[1, 2, 3], 4, 5, [6, [7, 8]]].reduce(function(prev,next){
   return prev.concat(next);
})
console.log("arr6",arr7); //1,2,3,4,5,6,7,8


