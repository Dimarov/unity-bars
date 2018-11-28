import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import Layout from '../components/layout'
import Company from '../components/company'

const CompanyPage = () => (
  <Layout>
    <Company />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default CompanyPage
