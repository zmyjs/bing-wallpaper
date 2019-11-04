# Bing每日壁纸

以支持跨域范围的方式使用Bing每日壁纸API。

## URL

https://bing-wallpaper.netlify.com/.netlify/functions/image

## 方法

GET

## 参数

| 属性 | 类型 | 说明 | 默认值 |
| - | - | - | - |
| n | Number | 图片数量；最小为`1`，最大为`8` | `1` |
| idx | Number | `0`为当天，大于0为历史图片，最大为`16` | `0` |
| format | String | 响应格式；可选：`js`、`xml`、`rss` | `js` |
| mkt | String | 语言、区域，例如：`zh-CN` | `en-US` |
| ensearch | Number | 详情模式，`0`关闭，`1`开启 | `0` |

## 响应

最外层为对象，有以下属性：

| 属性 | 类型 | 说明 |
| - | - | - |
| base | String | 图片相对地址的基准地址。这是唯一本项目新增的属性，其他属性为原版接口返回值。只当`format=js`时存在，其他情况自行添加`https://www.bing.com`。 |
| images | Array | 图片列表，每个元素为**图片对象** |
| tooltips | Object | 工具提示，自行探索。 |

### 图片对象

| 属性 | 类型 | 说明 |
| - | - | - |
| url | String | 图片相对地址 |
| title | String | 图片标题 |
| copyright | String | 版权信息 |
| copyrightlink | String | 版权链接绝对地址 |
| drk | Number | 图片是否为深色 |
| quiz | String | 知识点相对地址 |
| enddate | String | 图片日期 |

其他自行探索。

## 响应示例

```json
{
    "images": [
        {
            "startdate": "20191103",
            "fullstartdate": "201911030800",
            "enddate": "20191104",
            "url": "/th?id=OHR.AbseilersBigBen_EN-CN8254489814_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            "urlbase": "/th?id=OHR.AbseilersBigBen_EN-CN8254489814",
            "copyright": "Workers cleaning the clock face of Big Ben in London, England, for the end of Daylight Saving Time (© Reuters)",
            "copyrightlink": "https://www.bing.com/search?q=daylight+saving+time&form=hpcapt&filters=HpDate%3a%2220191103_0800%22",
            "title": "It's time to fall back",
            "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20191103_AbseilersBigBen%22&FORM=HPQUIZ",
            "wp": false,
            "hsh": "d4f292182fe35f882b047c3e350ad577",
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
    },
    "base": "https://www.bing.com"
}
```