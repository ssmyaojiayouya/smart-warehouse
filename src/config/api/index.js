import request from './request'

// 模版配置的四个增删改查的接口
// #region
function getAllConfig (params) {
  return request({
    url: '/osint/tmpconfig/getAllConfig',
    method: 'get',
    params: params
  })
}

function updateConfig (params) {
  return request({
    url: '/osint/tmpconfig/updateConfig',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function addConfig (params) {
  return request({
    url: '/osint/tmpconfig/addConfig',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function delConfig (params) {
  return request({
    url: '/osint/tmpconfig/delConfig',
    method: 'get',
    params
  })
}
// #endregion

// 数据概览的四个增删改查接口
// #region
function getNews (params) {
  return request({
    url: '/osint/newsview/getNews',
    method: 'get',
    params,
    headers: {
      'Content-Type': 'application/j son'
    }
  })
}

function updateNews (params) {
  return request({
    url: '/osint/newsview/updateNews',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function addNews (params) {
  return request({
    url: '/osint/newsview/addNews',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function delNews (params) {
  return request({
    url: '/osint/newsview/delNews',
    method: 'get',
    params
  })
}
// #endregion

// 专题配置的四个增删改查接口
// #region
function getCatalog (params) {
  return request({
    url: '/osint/catalog/getCatalog',
    method: 'get',
    params
  })
}

function updateCatalog (params) {
  return request({
    url: '/osint/catalog/updateCatalog',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function addCatalog (params) {
  return request({
    url: '/osint/catalog/addCatalog',
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function delCatalog (params) {
  return request({
    url: '/osint/catalog/delCatalog',
    method: 'get',
    params
  })
}
// #endregion

// 全文检索的接口
// #region
function getSearchKeywords () {
  return request({
    url: '/osint/search/getSearchKeywords',
    method: 'get'
  })
}

function queryDocument (params) {
  return request({
    url: '/osint/search/queryDocument',
    method: 'get',
    params
  })
}
// #endregion

// 6个图表的接口
// #region
// 学科门类数据
function getTechCategoryData () {
  return request({
    url: '/osint/count/countByClassifyTechCategory',
    method: 'get'
  })
}

// 学科性质数据
function getTechPropertyData () {
  return request({
    url: '/osint/count/countByClassifyTechProperty',
    method: 'get'
  })
}

// 实施要素数据
function getTechImplementElementData () {
  return request({
    url: '/osint/count/countByClassifyTechImplementElement',
    method: 'get'
  })
}

// 实施过程数据
function getTechImplementProcessData () {
  return request({
    url: '/osint/count/countByClassifyTechImplementProcess',
    method: 'get'
  })
}

// 词云统计数据
function getHotwordsData () {
  return request({
    url: '/osint/count/countByHotWords',
    method: 'get'
  })
}
// 按照年份统计科技创新的图表数据
function getYearData (params) {
  return request({
    url: '/osint/count/countByYear',
    method: 'get'
  })
}
// #endregion

export {
  getAllConfig,
  updateConfig,
  addConfig,
  delConfig,
  getNews,
  updateNews,
  addNews,
  delNews,
  getCatalog,
  updateCatalog,
  addCatalog,
  delCatalog,
  getSearchKeywords,
  queryDocument,
  getTechCategoryData,
  getTechImplementElementData,
  getTechImplementProcessData,
  getTechPropertyData,
  getHotwordsData,
  getYearData
}
