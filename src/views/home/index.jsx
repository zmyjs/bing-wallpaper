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
        const style = {};

        if (image) {
            style.backgroundImage = `url(https://www.bing.com${image.url})`;
            style.color = image.drk === 1 ? 'white' : 'black';
        }

        return (
            <div className="view-home" style={style}>
                <header>
                    <h1>Bing每日壁纸</h1>
                    <h2>以支持跨域范围的方式使用Bing每日壁纸API。</h2>
                </header>
                <main>
                    <p>
                        <a href="/.netlify/functions/image">https://bing-wallpaper.netlify.com/.netlify/functions/image</a>
                    </p>
                    <p>
                        <a href="https://github.com/kobezhu/bing-wallpaper#readme">文档</a>
                    </p>
                    <pre>
                        {JSON.stringify(image, null, '  ')}
                    </pre>
                </main>
                <footer></footer>
            </div>
        );
    }

    componentDidMount() {
        const self = this;
        api.bing(3).then(function (res) {
            self.setState({ images: res.images });
        });
    }
}

export default Home;