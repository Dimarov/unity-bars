import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News6 from '../components/news/news-6'

const News6Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News6 />
  </Layout>
)

export default News6Page
