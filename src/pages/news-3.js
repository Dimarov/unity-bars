import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News3 from '../components/news/news-3'

const News3Page = () => (
  <Layout>
    <Header ukLink="news-3" ruLink="news-3-ru" enLink="news-3-en" />
    <News3 />
  </Layout>
)

export default News3Page
