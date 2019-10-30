# Bing每日壁纸

以支持跨域范围的方式使用Bing每日壁纸API。

## URL

https://bing-wallpaper.netlify.com/.netlify/functions/wallpaper


## 方法

GET


## 参数

### n 图片数量

最小为0，最大为8，默认为1。

### idx 索引

0为当天，大于0为过去，最大为16，默认为0。


## 响应

返回一个JSON对象。

### images

图片列表

- url 图片绝对地址（原版接口为相对地址）
- title 图片标题

其他自行探索。

### tooltips 工具提示

自行探索。


## 响应示例

```json
{
    "images": [
        {
            "startdate": "20191030",
            "fullstartdate": "201910300700",
            "enddate": "20191031",
            "url": "https://cn.bing.com/th?id=OHR.CharlesNight_EN-US6584049116_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            "urlbase": "https://cn.bing.com/th?id=OHR.CharlesNight_EN-US6584049116",
            "copyright": "Charles Bridge over the Vltava River in Prague, Czech Republic (© Martin Moxter/Offset)",
            "copyrightlink": "https://www.bing.com/search?q=charles+bridge+prague&form=hpcapt&filters=HpDate%3a%2220191030_0700%22",
            "title": "Cross this bridge if you dare",
            "quiz": "https://cn.bing.com/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191030_CharlesNight%22&FORM=HPQUIZ",
            "wp": true,
            "hsh": "cd98891997358fbe31a8ffcd33a8fdae",
            "drk": 1,
            "top": 1,
            "bot": 1,
            "hs": []
        }
    ],
    "tooltips": {
        "loading": "Loading...",
        "previous": "Previous image",
        "next": "Next image",
        "walle": "This image is not available to download as wallpaper.",
        "walls": "Download this image. Use of this image is restricted to wallpaper only."
    }
}
```