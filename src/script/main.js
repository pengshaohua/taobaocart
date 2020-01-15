import "jquery";
//引入页面的css
import '../css/index.css';
import '../css/details.css';
import '../css/cart.css';


import { //加载模块
    render
} from './index.js';
import { //加载模块
    Details
} from './details.js';
import { //加载模块
    Cartlist
} from './cartlist.js';

new render().init(); //使用渲染模块
new Details().init(); //详情页面模块
new Cartlist().init(); //商品列表模块