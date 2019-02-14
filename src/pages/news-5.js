import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News5 from '../components/news/news-5'

const News5Page = () => (
  <Layout>
    <Header ukLink="news-5" ruLink="news-5-ru" enLink="news-5-en" />
    <News5 />
  </Layout>
)

export default News5Page
