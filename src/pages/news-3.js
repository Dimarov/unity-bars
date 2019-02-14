import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News3 from '../components/news/news-3'

const News3Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News3 />
  </Layout>
)

export default News3Page
