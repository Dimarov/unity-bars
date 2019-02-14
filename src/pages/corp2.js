import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Corp2 from '../components/corp2'

const Corp2Page = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Corp2 />
  </Layout>
)

export default Corp2Page
