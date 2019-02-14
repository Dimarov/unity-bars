import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News2 from '../components/news/news-2'

const News2Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News2 />
  </Layout>
)

export default News2Page
