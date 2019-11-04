import React from 'react';
import * as api from '../../utils/api';

class Home extends React.Component {
    state = {
        images: [],
        index: 0
    }

    render() {
        const { state } = this;

        const image = state.images[state.index];
        let style = {}, bgColor = 'bg-light';

        if (image) {
            style.backgroundImage = `url(https://www.bing.com${image.url})`;
            if (image.drk === 1)
                bgColor = 'bg-dark';
        }

        return (
            <div className={`view-home ${bgColor}`} style={style}>
                <header>
                    <h1>Bing每日壁纸</h1>
                </header>
                <main>
                    <h2>以支持跨域范围的方式使用Bing每日壁纸API。</h2>
                    <p>
                        <a href="/image">https://bing-wallpaper.netlify.com/.netlify/functions/image</a>
                    </p>
                    <p>
                        <a href="https://github.com/kobezhu/bing-wallpaper#readme">文档</a>
                    </p>
                </main>
                <footer>ZMY</footer>
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