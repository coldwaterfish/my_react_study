
// import Mock from 'mockjs'
// export default Mock.mock('/w3c/html', 'get', options=>{
//     return Mock.mock([
//     ]);
// })

// w3c
import whtml from './w3c/html'
import wcss from './w3c/css'
import wjs from './w3c/javascript'

// login
import login from './login/login'
import token from './login/token'

// vue
import vbasic from './vue/basic'
import vcli from './vue/cli'
import vdirective from './vue/directives'
import vrouter from './vue/router'
import vvuex from './vue/vuex'

// react
import rbasic from './react/basic'
import rantd from './react/antd'
import rcra from './react/cra'

// extend
import adaptation from './extend/adaptation'
import compatible from './extend/compatible'
import optimize from './extend/optimize'
import safety from './extend/safety'

// tool
import echarts from './tool/echarts'
import mock from './tool/mock'

// topic
import ajax from './topic/ajax'

// exercise
import ehtml from './exercise/html'
import ecss from './exercise/css'
import ejs from './exercise/javascript'

// work
import compony from './work/compony'
import computer from './work/computer'

export {
    whtml,wcss,wjs,login,token,
    vbasic,vcli,vdirective,vrouter,vvuex,
    rbasic,rantd,rcra,
    ajax,adaptation,compatible,optimize,safety,
    echarts,mock,
    ehtml,ecss,ejs,
    compony,computer
}

