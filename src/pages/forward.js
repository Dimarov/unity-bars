import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Forward from '../components/forward'

const ForwardPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Forward />
  </Layout>
)

export default ForwardPage
