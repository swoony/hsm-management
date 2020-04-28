import {MenuList} from "../../../apis";

import * as routerComponentNameList from "less";
export default {
  getMenuListAction({commit}, {
    classType,
    current,
    pid,
    resId,
    size
  }) {
    return MenuList({
      classType: classType,
      current: current,
      pid: pid,
      resId: resId,
      size: size
    }).then(data => {
      commit('updateMenuListData', data)
    })
  },


}
