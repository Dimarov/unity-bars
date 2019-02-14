import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News4 from '../components/news/news-4'

const News4Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News4 />
  </Layout>
)

export default News4Page
