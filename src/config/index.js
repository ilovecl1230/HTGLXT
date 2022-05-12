/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev:{
    baseApi:'/',
    mockApi:'https://www.fastmock.site/mock/9b2b5f243db5d698a3529f117c7f04a5/api'
  },
  test:{
    baseApi:'//test.futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/9b2b5f243db5d698a3529f117c7f04a5/api'
  },
  prod:{
    baseApi:'//futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/9b2b5f243db5d698a3529f117c7f04a5/api'
  }
}
export default{
  env,
  mock:true,
  ...EnvConfig[env]
}