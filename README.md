# Maoyan_WX
微信小程序：猫眼Demo，只实现了三个Tab，电影列表和电影详情，其他未实现。

1、涉及知识：
小程序全局配置（页面路径、导航栏、底部Tab），页面跳转及数据传递；
常用组件的使用，如scroll-view、navigator、image等；
界面布局（wxml）和交互(Loading显示和隐藏)，样式编写（wxss）；
网络API调用，数据绑定、列表渲染、条件渲染等；
未实现下拉刷新，有兴趣的可以自行实现。

2、猫眼API说明：

热门电影列表：
http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10
type=hot： 类型（其他参数不详）
offset : 数据开始位置
limit ：偏移量

电影详情
http://m.maoyan.com/movie/对应电影ID.json
例子：'http://m.maoyan.com/movie/1182552.json'

3、项目说明：
index:：主页（电影列表）
movie：电影详情
search：影院（本来想实现搜索功能，发现没有对应API，没实现，只换了名字和图标）
profile：我的
app.wxss：大部分样式写在了这个全局样式文件里面

4、关于图标：
来源于某电影App，仅用于学习，请勿商用，违者责任自负
