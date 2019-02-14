import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Background from '../components/background'
import ProductPreview from '../components/productpreview'

const IndexPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Background />
    <ProductPreview />
  </Layout>
)

export default IndexPage
