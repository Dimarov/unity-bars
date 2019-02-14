import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Datawarehouse from '../components/datawarehouse'

const DatawarehousePage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Datawarehouse />
  </Layout>
)

export default DatawarehousePage
