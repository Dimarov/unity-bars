import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News5 from '../components/news/news-5'

const News5Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News5 />
  </Layout>
)

export default News5Page
