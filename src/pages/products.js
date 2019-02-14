import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Products from '../components/products'

const ProductsPage = () => (
  <Layout>
    <Header ukLink="products" ruLink="products-ru" enLink="products-en" />
    <Products />
  </Layout>
)

export default ProductsPage
