/* eslint-disable spaced-comment,no-useless-escape,indent,semi */
/**
 * 验证框架
 */
class Vl {
}

/**
 * 注册VUE插件
 * @param Vue
 */
Vl.install = function (Vue) {

  let vp = {
    //数字
    NUMBER: /^\d+$/,
    //整型
    INTEGER: /^[-\+]?\d+$/,
    //正整数
    POSITINTEGER: /^[1-9]\d*$/,
    //小数
    DOUBLE: /^[-\+]?\d+(\.\d+)?$/,
    //两位小数
    TOWDOUBLE: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
    TOWDOUBLEZERO: /^(([0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
    //电话号码
    MOBILE: /^1[0-9][0-9]\d{8}$/,
    //电话号码
    TEL: /^[0-9-]+$/,
    EMAIL: '',
    //英文+数字
    CHARANDNUM: /^[A-Za-z0-9]+$/,
    //英文+数字+中文
    CHARANDNUMCN: /^[A-Za-z0-9\u0391-\uFFE5]+$/,
    //英文
    ENGLISH: /^[A-Za-z]+$/,
    //中文
    CHINESE: /^[\u0391-\uFFE5]+$/,
    //版本号正则 ： ^([1-9]\d|[1-9])(\.([1-9]\d|\d)){2}$
    VERSIONNUM: /^([1-9]\d|[1-9])(\.([1-9]\d|\d)){2}$/,
    //字符串长度，最小-最大长度
    STRLEN: function (min, max, val) {
      console.log('执行字符串长度判断');
      if (min !== null && min !== undefined && val.length < min) {
        return '输入的内容长度应大于等于' + min;
      }
      if (max !== null && max !== undefined && val.length > max) {
        return '输入的内容长度应小于等于' + max;
      }
      return '';
    },
    //数字返回，最小-最大值
    RANG: function (min, max, val) {
      console.log('执行范围判断');

      if (min !== null && min !== undefined && val < min) {
        return '输入的内容范围应大于等于' + min;
      }
      if (max !== null && max !== undefined && val > max) {
        return '输入的内容范围应小于等于' + max;
      }

      return '';
    }
  }

  /**
   * 验证
   * @param rules 规则
   * @param val 值
   */
  Vue.prototype.$vd = (rules, val) => {
    let v = val
    // console.log(rules)
    // console.log(val)
    let result = {checkResult: true};
    for (let key in v) {
      result[key] = {v: true, msg: ''};
      let vlData = val[key];
      if (rules === undefined) {
        continue;
      }
      let rule = rules[key];
      if (rule === null || rule === undefined) {
        // console.log('没有' + key);
        continue;
      }
      //不必填
      let required = rule['required'];
      if ((vlData == null || vlData === undefined || vlData.length < 1) && !required) {
        continue;
      }
      if (vlData === null || vlData.length < 1) {
        result[key] = {v: false, msg: rule.msg};
        result['checkResult'] = false;
        // console.log(result);
        return result;
      }
      let valType = rule['type'];
      // console.log(valType);
      var typearr = Object.keys(valType);
      if (typearr.length < 1) {
        console.log('类型错误,没有规则');
      }

      for (let typeKey in valType) {
        let exec = vp[typeKey];
        if (exec instanceof Function) {
          let valValue = valType[typeKey];
          let errMsg = exec(valValue[0], valValue[1], vlData);
          if (errMsg !== undefined && errMsg.length > 0) {
            let res = result[key];
            res.v = false;
            res.msg = errMsg;
            result['checkResult'] = false;
            break;
          }
          // console.log(errMsg);
        } else {
          let flag = exec.test(vlData);
          if (!flag) {
            let res = result[key];
            res.v = false;
            res.msg = rule.msg;
            result['checkResult'] = false;
            break;
          }
        }
      }
    }
    // console.log(result);
    return result;
  }
  Vue.prototype.$vd2 = (rules, val) => {
    let v = val
    let result = {checkResult: true, msg: '', items: {}};
    for (let key in v) {
      Vue.set(result.items, key, {v: true, msg: ''});
      let vlData = val[key];
      if (rules === undefined) {
        continue;
      }
      let rule = rules[key];
      if (rule === null || rule === undefined) {
        // console.log('没有' + key);
        continue;
      }
      //不必填
      let required = rule['required'];
      if ((vlData == null || vlData === undefined || vlData.length < 1) && !required) {
        continue;
      }
      if (vlData === null || vlData.length < 1) {
        Vue.set(result.items, key, {v: false, msg: rule.msg});
        result['checkResult'] = false;
        Vue.set(result, 'msg', rule.msg);
        return result;
      }
      let valType = rule['type'];
      var typearr = Object.keys(valType);
      if (typearr.length < 1) {
        console.log('类型错误,没有规则');
      }

      let vflag = true;
      for (let typeKey in valType) {
        let exec = vp[typeKey];
        if (exec instanceof Function) {
          let valValue = valType[typeKey];
          let errMsg = exec(valValue[0], valValue[1], vlData);
          if (errMsg !== undefined && errMsg.length > 0) {
            let res = result.items[key];
            res.v = false;
            res.msg = errMsg;
            result['checkResult'] = false;
            Vue.set(result, 'msg', rule.msg);
            vflag = false;
            break;
          }
        } else {
          let flag = exec.test(vlData);
          if (!flag) {
            let res = result.items[key];
            res.v = false;
            res.msg = rule.msg;
            result['checkResult'] = false;
            Vue.set(result, 'msg', rule.msg);
            vflag = false;
            break;
          }
        }
      }
      if (!vflag) {
        break;
      }
    }
    return result;
  }
}
export default Vl
