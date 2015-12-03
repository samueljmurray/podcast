import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import es from './elasticsearch/elasticsearch_settings'
const elasticsearch = require('elasticsearch');

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

const client = new elasticsearch.Client({
  host: es.host
  //log: 'trace'
})

client.search({
  index: 'popular',
  type: 'podcast',
  "query" : {},
  "sort" : "rank:asc"
}).then(function (resp) {
    var hits = resp.hits.hits
    console.log(hits)
}, function (err) {
    console.trace(err.message)
})