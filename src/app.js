/**
 * Created by Administrator on 2017/6/18.
 */
import Layer from './components/layer/layer'
import  './css/common.css';
const App=function(){
    var dom=document.getElementById("app");
    var layer=new Layer();
    //.tpl文件返回一个直接编译好的函数
    dom.innerHTML=layer.tpl({
        name:"joe",
        arr:['xiaomi','huawei','pingguo']
    });
}
new App()