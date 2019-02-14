import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import News from '../components/news'

const NewsPage = () => (
  <Layout>
    <Header ukLink="news" ruLink="news-ru" enLink="news-en" />
    <News />
  </Layout>
)

export default NewsPage
