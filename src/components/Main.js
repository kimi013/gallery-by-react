require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';


// 获取图片相关数据
let imageDatas =  require('../data/imageDatas.json');


// 利用自执行函数，将图片名信息转化为URL路径信息
imageDatas = (function getImageURL(imageDatasArr) {
  for (let i = 0, len = imageDatasArr.length; i < len; i++) {
    let singleImageData = imageDatasArr[i];

    singleImageData.imageURL = '../images/' + singleImageData.fileName;
  }

  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className = "stage">
        <section className = "img-sec">
        </section>
        <nav className = "controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
