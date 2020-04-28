export function HashMap () {
  let obj = new Object()
  //定义长度
  obj.length = 0
  obj.prefix = 'hash_map_'//加前缀 让map中的put进去的key与成员区分
  /**
   * 判断Map是否为空
   */
  obj.isEmpty = function () {
    return obj.length == 0
  }

  /**
   * 判断对象中是否包含给定Key
   */
  obj.containsKey = function (key) {
    key = obj.prefix + key
    return (key in obj)
  }

  /**
   * 判断对象中是否包含给定的Value
   */
  obj.containsValue = function (value) {
    for (let key in obj) {
      if (obj[key] == value) {
        return true
      }
    }
    return false
  }

  /**
   *向map中添加数据
   */
  obj.put = function (key, value) {
    let map_key = obj.prefix + key
    if (!obj.containsKey(key)) {
      obj.length++
    }
    obj[map_key] = value
  }

  /**
   * 根据给定的Key获得Value
   */
  obj.get = function (key) {
    let map_key = obj.prefix + key
    return obj.containsKey(key) ? obj[map_key] : null
  }

  /**
   * 根据给定的Key删除一个值
   */
  obj.remove = function (key) {
    let map_key = obj.prefix + key
    if (obj.containsKey(key) && (delete obj[map_key])) {
      obj.length--
    }
  }
  /**
   * 获得Map中的所有Value
   */
  obj.values = function () {
    let _values = new Array()
    for (let key in obj) {
      if (key.startsWith(obj.prefix)) {
        _values.push(obj[key])
      }
    }
    return _values
  }

  /**
   * 获得Map中的所有Key
   */
  obj.keySet = function () {
    let _keys = new Array()
    for (let key in obj) {
      if (key.startsWith(obj.prefix)) {
        let k = key.split(obj.prefix).join('')
        _keys.push(k)
      }
    }
    return _keys
  }

  /**
   * 获得Map的长度
   */
  obj.size = function () {
    return obj.length
  }
  /**
   * 清空Map
   */
  obj.clear = function () {
    obj = new Object()
    obj.length = 0
  }
  return obj
}
