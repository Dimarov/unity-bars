import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News2 from '../components/news/news-2'

const News2Page = () => (
  <Layout>
    <Header ukLink="news-2" ruLink="news-2-ru" enLink="news-2-en" />
    <News2 />
  </Layout>
)

export default News2Page
