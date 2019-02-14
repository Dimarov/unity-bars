import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Creditmodule from '../components/creditmodule'

const CreditmodulePage = () => (
  <Layout>
    <Header ukLink="creditmodule" ruLink="creditmodule-ru" enLink="creditmodule-en" />
    <Creditmodule />
  </Layout>
)

export default CreditmodulePage
