import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Company from '../components/company'

const CompanyPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="company-ru" enLink="company-en" />
    <Company />
  </Layout>
)

export default CompanyPage
