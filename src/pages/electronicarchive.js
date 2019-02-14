import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Electronicarchive from '../components/electronicarchive'

const ElectronicarchivePage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Electronicarchive />
  </Layout>
)

export default ElectronicarchivePage
