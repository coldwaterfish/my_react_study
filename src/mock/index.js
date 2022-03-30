
// import Mock from 'mockjs'
// export default Mock.mock('/w3c/html', 'get', options=>{
//     return Mock.mock([
//     ]);
// })

// html
import hbasic from './html/basic'

// css
import cbasic from './css/basic'
import cless from './css/less'

// js
import jbasic from './js/basic'
import jbom from './js/bom'
import ajax from './js/ajax'
import jexercise from './js/exercise'

// login
import login from './login/login'
import token from './login/token'

// vue
import vbasic from './vue/basic'
import vcli from './vue/cli'
import vdirective from './vue/directives'
import vrouter from './vue/router'
import vvuex from './vue/vuex'
import vpractice from './vue/practice'
import velement from './vue/element'

// react
import rbasic from './react/basic'
import rantd from './react/antd'
import rcra from './react/cra'

// tool
import echarts from './tool/echarts'
import mock from './tool/mock'
import vscode from './tool/vscode'
import computer from './tool/computer'
import webpack from './tool/webpack'
import eslint from './tool/eslint'

// topic
import nginx from './topic/nginx'
import mobile from './topic/mobile'
import compatible from './topic/compatible'
import optimize from './topic/optimize'
import safety from './topic/safety'


export {
    hbasic,
    cbasic,cless,
    jbasic,ajax,jbom,jexercise,
    login,token,
    vbasic,vcli,vdirective,vrouter,vvuex,vpractice,velement,
    rbasic,rantd,rcra,
    nginx,mobile,
    compatible,optimize,safety,
    echarts,mock,computer,vscode,webpack,eslint
}

