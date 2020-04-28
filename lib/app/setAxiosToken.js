import axios from "axios";
import Vue from "vue";

if (process.env.Authorization) {
    axios.defaults.headers.common[
        "Authorization"
    ] = process.env.Authorization;
}

//请求拦截
axios.interceptors.request.use(
    function(config) {
      if (config.method === "get") {
        // 序列化请求参数
        config.paramsSerializer = function(params) {
          return qs.stringify(params, { arrayFormat: "repeat" });
        };
      }
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // 响应拦截
  axios.interceptors.response.use(
    function(response) {
      if ("" + response.data.code === "0") {
        return response.data.data;
      } else if (
        "" + response.data.code === "20004" ||
        "" + response.data.code === "20005" ||
        "" + response.data.code === "20006"
      ) {
        //token失效的情况
        // loginUtil.removeToken();
        location.href = "/";
      } else {
        Vue.prototype.$notify.error({
          title: "错误",
          message: response.data.msg
        });
        console.group("业务逻辑错误");
        console.warn(`请求接口：${response.config.url}`);
        if (response.config.params) {
          console.warn(`请求参数：${JSON.stringify(response.config.params)}`);
        }
        console.warn(`错误描述：${response.data.msg}`);
        console.warn(`错误码：${response.data.code}`);
        console.groupEnd();
        return Promise.reject(response.data);
      }
    },
    function(error) {
      // Do something with response error
      if (axios.isCancel(error)) {
        return Promise.reject(error);
      }
      let msg;
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // loginUtil.removeToken();
            location.reload();
            msg = "未授权";
            break;
          case 403:
            msg = "请求被屏蔽";
            break;
          case 404:
            msg = "请求未找到";
            break;
          case 405:
            msg = "请求不被允许";
            break;
          case 500:
            msg = "服务器错误";
            break;
          default:
            msg = "请求出错";
            break;
        }
      } else {
        msg = error.message || error;
      }
      Vue.prototype.$notify.error({
        title: "错误",
        message: msg
      });
      return Promise.reject(error);
    }
  );
export default {}