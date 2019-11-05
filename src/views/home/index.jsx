import React from 'react';
import * as api from '../../utils/api';

const fnBase = 'https://bing-wallpaper.netlify.com/.netlify/functions',
    bing = 'https://www.bing.com';

class Home extends React.Component {
    state = {
        images: [],
        index: 0
    }

    render() {
        const { state } = this;

        const image = state.images[state.index];
        let style = {}, bgColor = 'bg-dark';

        if (image) {
            style.backgroundImage = `url(${bing}${image.url})`;
            if (image.drk !== 1)
                bgColor = 'bg-light';
        }

        return (
            <div className={`view-home ${bgColor}`} style={style}>
                <main className="masking">
                    <h1>Bing每日壁纸</h1>
                    <h2>以支持跨域的方式使用Bing每日壁纸API。</h2>
                    <h3>
                        <a href="https://github.com/kobezhu/bing-wallpaper#readme">文档（GitHub）</a>
                    </h3>
                    <p>
                        完整版：
                        <a href="/archive">{fnBase}/archive</a>
                    </p>
                    <p>
                        精简版：
                        <a href="/simple">{fnBase}/simple</a>
                    </p>
                </main>
                <footer className="masking">
                    <p>
                        网站托管自<a href="https://www.netlify.com/">Netlify</a>。
                        接口所有数据来自<a href={bing}>Microsoft Bing</a>，本站只增加跨域支持。
                    </p>
                    <p className="logo">
                        <img src="https://cn.bing.com/sa/simg/bing_p_rr_teal_min.ico" alt="Bing-logo" />
                        <img src="https://www.netlify.com/img/global/favicon/favicon-32x32.png" alt="Netlify-logo" />
                    </p>
                    <p>© {new Date().getFullYear()} ZMY</p>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        const self = this;
        api.bing().then(function (res) {
            self.setState({ images: res.images });
        });
    }
}

export default Home;