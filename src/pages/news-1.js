import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News1 from '../components/news/news-1'

const News1Page = () => (
  <Layout>
    <Header ukLink="news-1" ruLink="news-1-ru" enLink="news-1-en" />
    <News1 />
  </Layout>
)

export default News1Page
