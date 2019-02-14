import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Bone from '../components/bone'

const BonePage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Bone />
  </Layout>
)

export default BonePage
