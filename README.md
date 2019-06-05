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
  const onSuccess = isSuccess => console.log(isSuccess);

  return (
    <TencentCaptcha
      gt="your-gt"
      challenge="your-challenge"
      onSuccess={onSuccess}
    />
  );
};
```

## Properties

``` javascript
  className:    PropTypes.string,
  gt:           PropTypes.string.isRequired,
  challenge:    PropTypes.string.isRequired,
  offline:      PropTypes.bool,
  newCaptcha:   PropTypes.bool,
  product:      PropTypes.string,
  width:        PropTypes.string,
  lang:         PropTypes.string,
  https:        PropTypes.bool,
  timeout:      PropTypes.number,
  area:         PropTypes.string,
  nextWidth:    PropTypes.string,
  bgColor:      PropTypes.string,
  onReady:      PropTypes.func,
  onSuccess:    PropTypes.func,
  onError:      PropTypes.func,
  onClose:      PropTypes.func,
```

[Read More](https://007.qq.com/web-access.html?ADTAG=acces.cfg)

# License

MIT
