import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News1 from '../components/news/news-1'

const News1Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News1 />
  </Layout>
)

export default News1Page
