import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Corplight from '../components/corplight'

const CorplightPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Corplight />
  </Layout>
)

export default CorplightPage
