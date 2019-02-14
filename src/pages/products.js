import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Products from '../components/products'

const ProductsPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Products />
  </Layout>
)

export default ProductsPage
