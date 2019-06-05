# react-tencent-captcha

> A TCaptcha component for React

## Installation

```
$ npm install react-tencent-captcha --save
```

## Usage

``` react
import TencentCaptcha from 'react-tencent-captcha';

export default () => {
  const onCallBack = (...args) => console.log(...args);
  const onReady = instance => console.log(instance);

  return (
    <TencentCaptcha
      appId="your-appId"
      options={{}}
      onCallBack={onCallBack}
      onReady={onReady}
    />
  );
};
```

## Properties

``` javascript
  className:    PropTypes.string,
  appId:        PropTypes.string.isRequired,
  options:      PropTypes.object,
  onCallBack:   PropTypes.func,
  onReady:      PropTypes.func,
```

[Read More](https://007.qq.com/web-access.html?ADTAG=acces.cfg)

# License

MIT
