/**
 * Created by qq2575896094 on 2017/11/7.
 *
 * HTML5 本地存储
 *
 */


export default {
  setItem(key, value) {
    localStorage.setItem(key, value);
  },
  getItem(key) {
    return localStorage.getItem(key);
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
}
