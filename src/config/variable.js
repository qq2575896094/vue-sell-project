/**
 * Created by qq2575896094 on 2017/10/11.
 */

/**
 *
 * @type {{url: string}}
 */
export let sendSellerObj = {
  url: '/static/data/seller.json'
};

/**
 * 短信登录
 * @type {{url: string}}
 */
export let sendMobileLogin = {
  url: '/api/users/mobileLogin'
};

/**
 * 手机/邮箱/用户名登录
 * @type {{url: string}}
 */
export let sendAccountLogin = {
  url: '/api/users/accountLogin'
};

/**
 * 获取图形验证码
 * @type {{url: string}}
 */
export let sendCaptchas = {
  url: '/api/captchas/captchas'
};


/**
 * 手机号登录
 * @type {{url: string, params: {code: string, mobile: string, validate_token: string}}}
 */
export let mobileLoginObj = {
  url: '/v1/login/app_mobile',
  params: {
    code: "",
    mobile: "",
    validate_token: ""
  }
};

/**
 * 获取用户信息
 * @type {{url: string}}
 */
export let sendUserInfo = {
  url: '/api/users/getUserInfo'
};
