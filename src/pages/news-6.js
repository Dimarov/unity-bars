import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News6 from '../components/news/news-6'

const News6Page = () => (
  <Layout>
    <Header ukLink="news-6" ruLink="news-6-ru" enLink="news-6-en" />
    <News6 />
  </Layout>
)

export default News6Page
