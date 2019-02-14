import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News from '../components/news'

const NewsPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <News />
  </Layout>
)

export default NewsPage
