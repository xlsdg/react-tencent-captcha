import React from 'react';

const SCRIPT_ID = 'react-tencent-captcha';

const typeOf = type => object => Object.prototype.toString.call(object) === `[object ${type}]`;

// const isString = typeOf('String');
// const isObject = typeOf('Object');
const isFunction = typeOf('Function');

export default class TCaptcha extends React.PureComponent {
  static defaultProps = {
    className: 'i-tcaptcha',
    // appId: '',
    options: {},
    onCallBack: () => {},
    onReady: () => {},
  };

  constructor() {
    super(...arguments);

    const that = this;

    that.dom = React.createRef();
    that.instance = null;
    that.script = null;

    // that.state = {};
  }

  componentDidMount() {
    const that = this;
    // console.log('componentDidMount', that.props, that.state);
    that.init();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const that = this;
  //   // console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
  //   const {
  //     className,
  //     appId,
  //     options,
  //   } = that.props;

  //   const isUpdate =
  //     className !== nextProps.className ||
  //     appId !== nextProps.appId ||
  //     options !== nextProps.options;

  //   return isUpdate;
  // }

  componentDidUpdate(prevProps, prevState) {
    const that = this;
    // console.log('componentDidUpdate', prevProps, that.props, prevState, that.state);
    that.init();
  }

  componentWillUnmount() {
    const that = this;
    // console.log('componentWillUnmount', that.props, that.state);
    that.destroy();
  }

  init = () => {
    const that = this;
    // console.log('init');
    // const {  } = that.state;

    if (window.TencentCaptcha) {
      that.ready();
      return;
    }

    const script = document.getElementById(SCRIPT_ID);
    if (script) {
      if (that.script) {
        return;
      }

      script.addEventListener('Im-ready', that.ready, false);
      that.script = script;
      return;
    }

    const ds = document.createElement('script');
    ds.id = SCRIPT_ID;
    ds.type = 'text/javascript';
    ds.async = true;
    ds.charset = 'utf-8';

    if (ds.readyState) {
      ds.onreadystatechange = () => {
        if (ds.readyState === 'loaded' || ds.readyState === 'complete') {
          ds.onreadystatechange = null;
          that.ready();
          that.triggerEvent('Im-ready');
        }
      };
    } else {
      ds.onload = () => {
        ds.onload = null;
        that.ready();
        that.triggerEvent('Im-ready');
      };
    }

    // const protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
    // ds.src = `${protocol}//ssl.captcha.qq.com/TCaptcha.js?_t=${new Date().getTime()}`;
    ds.src = `https://ssl.captcha.qq.com/TCaptcha.js?_t=${new Date().getTime()}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ds, s);
    that.script = ds;
  };

  ready = event => {
    const that = this;
    // console.log('_ready');
    const { appId, options, onCallBack, onReady } = that.props;
    // const {  } = that.state;

    if (!window.TencentCaptcha) {
      return;
    }

    if (that.instance) {
      // that.instance.destroy();
      return;
    }

    const captcha = new window.TencentCaptcha(that.dom.current, appId, onCallBack, options);
    that.instance = captcha;

    if (that.script && isFunction(that.script.removeEventListener)) {
      that.script.removeEventListener('Im-ready', that.ready, false);
    }

    if (isFunction(onReady)) {
      onReady(captcha);
    }
  };

  destroy = () => {
    const that = this;
    // console.log('destroy');
    // const {  } = that.state;

    if (that.script && isFunction(that.script.removeEventListener)) {
      that.script.removeEventListener('Im-ready', that.ready, false);
      // that.script.parentNode.removeChild(that.script);
    }

    if (that.instance && isFunction(that.instance.destroy)) {
      that.instance.destroy();
    }

    that.instance = null;
    that.script = null;
  };

  triggerEvent = name => {
    const that = this;
    // console.log('triggerEvent');
    // const {  } = that.state;

    if (!that.script || !isFunction(that.script.dispatchEvent)) {
      return;
    }

    const e = document.createEvent('Event');
    e.initEvent(name, true, true);
    that.script.dispatchEvent(e);
  };

  render() {
    const that = this;
    // console.log('render');
    const { className, children } = that.props;

    return (
      <div ref={that.dom} className={className}>
        {children}
      </div>
    );
  }
}
